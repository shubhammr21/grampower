# Instruction

_1._ Run this commands to start the project

- pip install -r requirements.txt
- python manage.py makemigrations
- python manage.py migrate
- python manage.py makesuper
- python manage.py runserver

### To load sample data please follow these instruction given below:

- python manage.py shell_plus
- from api.sample_data import \*
- sample = SampleData()
  \*\* mention the count of data
- insert_user(count):
- inser_store(count):
- inser_products(count):
- inser_photo(count):
- inser_store_hour():

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
