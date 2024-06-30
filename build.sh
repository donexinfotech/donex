set -e

cd Website
npm install
npm run build
cd ..

pip install -r requirements.txt
python manage.py migrate
python manage.py collectstatic --noinput