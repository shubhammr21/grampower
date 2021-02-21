# Instruction

_1._ Run this commands to start the project
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py makesuper
python manage.py runserver

_2._ Run this commands to start frontend
npm install
npm run dev

### env

    **Create this .env file.

DEBUG=True

SECRET_KEY=YOur_secure_secrete_key

DB_NAME=dbname
DB_USER=postgres
DB_PASSWORD=Skmadgjm123
DB_HOST=localhost

SENTRY_DSN = SENTRY_DSN
