from django.db.models import F
from .models import *
from random import randint
import time
from faker import Faker

fake = Faker('en_US')


class SampleData():
    def insert_user(self, count):
        starttime = time.time()
        for _ in range(0, count):
            user = User()
            user.first_name = fake.first_name()
            user.last_name = fake.last_name()
            user.username = f'{user.first_name.lower()}.{user.last_name.lower()}'
            user.email = f'{user.username}@email.com'
            user.set_password('12a34567890')
            user.save()
            print(f'Obj took {time.time() - starttime} seconds to create {_} Data')
        print(f'Total time took {time.time() - starttime} seconds to create {count} Data')

    def insert_store(self, count):
        starttime = time.time()
        user = User.objects.all().values_list('id', flat=True)
        for _ in range(0, count):
            blog = Store.objects.create(
                owner_id=fake.word(ext_word_list=user),
                name=fake.sentence(),
                cover='cover/image-1.jpg',
                about=fake.paragraph(nb_sentences=10),
                latitude=fake.latitude(),
                longitude=fake.longitude(),
            )
            blog.timestamp = fake.date_time_between(start_date='-1y', end_date='now', tzinfo=None)
            blog.save()
            print(f'Obj took {time.time() - starttime} seconds to create {_} Data')
        print(f'Total time took {time.time() - starttime} seconds to create {count} Data')

    def insert_products(self, count):
        starttime = time.time()
        store = Store.objects.all().values_list('id', flat=True)
        for _ in range(0, count):
            Product.objects.create(
                store_id=fake.word(ext_word_list=store),
                name=fake.word().capitalize(),
            )
            print(f'Obj took {time.time() - starttime} seconds to create {_} Data')
        print(f'Total time took {time.time() - starttime} seconds to create {count} Data')

    def insert_photo(self, count):
        starttime = time.time()
        store = Store.objects.all().values_list('id', flat=True)
        for _ in range(0, count):
            Photo.objects.create(
                store_id=fake.word(ext_word_list=store),
                image='photos/blog-article-1.jpg'
            )
            print(f'Obj took {time.time() - starttime} seconds to create {_} Data')
        print(f'Total time took {time.time() - starttime} seconds to create {count} Data')

    def insert_store_hour(self):
        starttime = time.time()
        stores = Store.objects.all().values_list('id', flat=True)
        for store in stores:
            for _ in range(1, 8):
                StoreHour.objects.create(
                    store_id=store,
                    day=_,
                    open_time=fake.time(),
                    close_time=fake.time()
                )
            print(f'Obj took {time.time() - starttime} seconds to create {_} Data')
        print(f'Total time took {time.time() - starttime} seconds to create {} Data')
