# About

This project created using Django, Django RestFrameworkm and React

# Instruction

_1._ Run this commands to start the project

- virtualenv env .
- source env/bin/activate
- pip install -r requirements.txt
- python manage.py makemigrations
- python manage.py migrate
- python manage.py makesuper

### To load sample data please follow these instruction given below:

- python manage.py shell_plus
- from api.sample_data import \*
- sample = SampleData()
  \*\* mention the count of data
- sample.insert_user(20)
- sample.insert_store(200)
- sample.insert_products(2000)
- sample.insert_photo(3000)
- sample.insert_store_hour()

- python manage.py runserver

### Admin Login

Goto [http://127.0.0.1:8000/admin/]

    ** login with 'admin' username and password

_2._ Run this commands to start frontend

- npm install
- npm run dev

### env

    ** Create this .env file.

DEBUG=True

SECRET_KEY=YOur_secure_secrete_key

DB_NAME=dbname
DB_USER=postgres
DB_PASSWORD=Skmadgjm123
DB_HOST=localhost

SENTRY_DSN = SENTRY_DSN
