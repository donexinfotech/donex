import React from 'react';
import './Contact.css';

class Contact extends React.Component {

    constructor() {
        super();
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    changeHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.value);
        console.log(this.state);
    }

    submitHandler(event) {
        const csrftoken = this.getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/api/contact-us/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(this.state),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <div className='contact' id='contact'>
                <div className='heading'>
                    <h2>Contact us</h2>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div className='container'>
                        <div className="row">
                            <div className="col">
                                <input type="text" name='first_name' className="form-control" placeholder="First name" aria-label="First name" onChange={this.changeHandler} />
                            </div>
                            <div className="col">
                                <input type="text" name='last_name' className="form-control" placeholder="Last name" aria-label="Last name" onChange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={this.changeHandler} />

                            <label htmlFor="phoneNumber" className="form-label mt-3">Phone Number</label>
                            <input type="text" name='phone' id="phoneNumber" className="form-control" aria-describedby="passwordHelpBlock" onChange={this.changeHandler} />

                            <label htmlFor="company" className="form-label mt-3">Company</label>
                            <input type="text" name='company' id="company" className="form-control" aria-describedby="passwordHelpBlock" onChange={this.changeHandler} />

                            <div className="mb-3 mt-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name='message' rows="3" onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary button-contact">Submit</button>
                        <button type="submit" className="btn btn-primary Wbutton"><i className="fa-brands fa-whatsapp"></i> WhatsApp</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact;
