from django.db.models import F
from .models import *
from random import randint
import time
from faker import Faker

fake = Faker('en_US')


class SampleData():
    def insert_user(self, count):
        pass
