import os
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.utils.text import StreamingBuffer, slugify
from django.utils.translation import ugettext_lazy as _
from ckeditor.fields import RichTextField
from api.managers import StepManager
from django.db.models.signals import pre_save
from django.dispatch import receiver
from versatileimagefield.fields import VersatileImageField, PPOIField
User = get_user_model()

"""
# TODO :
"""

MONDAY = 1
TUESDAY = 2
WEDNESDAY = 3
THURSDAY = 4
FRIDAY = 5
SATURDAY = 6
SUNDAY = 7
DAY_SELECT = (
    (MONDAY, 'Monday'),
    (TUESDAY, 'Tuesday'),
    (WEDNESDAY, 'Wednesday'),
    (THURSDAY, 'Thursday'),
    (FRIDAY, 'Friday'),
    (SATURDAY, 'Saturday'),
    (SUNDAY, 'Sunday')
)


class Store(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE
    )
    name = models.CharField(max_length=150)
    cover = models.ImageField(upload_to='cover/', blank=True)
    about = models.TextField()
    #need to add location value for the same
    latitude = models.CharField(max_length=100, blank=True)
    longitude = models.CharField(max_length=100, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class StoreHour(models.Model):
    store = models.ForeignKey(
        Store, on_delete=models.CASCADE,
        related_name='store_hour'
    )
    day = models.PositiveSmallIntegerField(choices=DAY_SELECT)
    open_time = models.TimeField(blank=True)
    close_time = models.TimeField(blank=True)

    def __str__(self) -> str:
        return self.store.name


class Product(models.Model):
    name = models.CharField(max_length=150)
    store = models.ForeignKey(
        Store, on_delete=models.CASCADE,
        related_name='products'
    )

    def __str__(self) -> str:
        return self.name


class Photo(models.Model):
    store = models.ForeignKey(
        Store, on_delete=models.CASCADE,
        related_name='photos'
    )
    image = VersatileImageField(
        'Photo',
        upload_to='photos/',
        ppoi_field='image_ppoi'
    )
    image_ppoi = PPOIField()
    # thumbnail = models.ImageField(upload_to='photos/thumb', blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.store__name

""" Signals Here """


@receiver(pre_save, sender=Photo)
def process_picture(sender, **kwargs):
    pass
