import React from 'react'
import './About.css'
import IconCloud from "./magicui/icon-cloud.tsx";

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

const About = () => {
    return (
    <div className='about' id='about'>
    <h1>About US</h1>
    <div className="container1">
        <div className="mobile relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8">
            <IconCloud iconSlugs={slugs} />
        </div>
        <div className="content">
            <h2>Welcome to Our Website</h2>
            <p>DoneXInfotech, excels in creating custom websites and apps.
                We focus on enhancing your digital presence and optimizing
                operations to drive business success. With our tailored 
                solutions, we ensure your online platforms are effective,
                user-friendly, and aligned with your strategic goals in the
                competitive digital market.</p>
        </div>
    </div>
</div>

    )
}

export default About