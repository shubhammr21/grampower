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

Goto [http://127.0.0.1:8000/docs/swagger/]
or
Goto [http://127.0.0.1:8000/docs/api/]

#### sign in with admin

    ** 'admin' is the username and password.
    [http://127.0.0.1:8000/api/load_sample_data]
    With post method

- python manage.py runserver

### Admin Login

Goto [http://127.0.0.1:8000/admin/]

    login with 'admin' username and password

_2._ Run this commands to start frontend

- npm install
- npm run dev

### env

    Create this .env file.

DEBUG=True

SECRET_KEY=YOur_secure_secrete_key

DB_NAME=dbname
DB_USER=postgres
DB_PASSWORD=Skmadgjm123
DB_HOST=localhost

SENTRY_DSN = SENTRY_DSN
