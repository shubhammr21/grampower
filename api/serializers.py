from django.db.models import fields
from django.db.models.query_utils import select_related_descend
from rest_framework import serializers
from rest_framework.utils import model_meta
from .models import *
from django.utils.timesince import timesince, timeuntil
from versatileimagefield.serializers import VersatileImageFieldSerializer

"""
# TODO
"""


""" Custom Fields for relavant data """


class TrunCatField(serializers.RelatedField):
    def to_representation(self, value):
        if len(value) > 120:
            return f'{value[:120]}...'
        return value


""" Serializers """


class PhotoSerializer(serializers.ModelSerializer):
    image = VersatileImageFieldSerializer(
        sizes=[
            ('full_size', 'url'),
            ('thumbnail', 'thumbnail__160x160'),
        ]
    )

    class Meta:
        model = Photo
        fields = ['id', 'image']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name']


class StoreListSerializer(serializers.ModelSerializer):
    owner_name = serializers.CharField(
        source='owner.username', read_only=True)
    about = TrunCatField(read_only=True)

    class Meta:
        model = Store
        fields = ['id', 'owner_name', 'name', 'cover', 'about']


class StoreHourSerializer(serializers.ModelSerializer):
    day = serializers.CharField(source='get_day_display')
    open_time = serializers.TimeField(format='%I:%M %p')
    close_time = serializers.TimeField(format='%I:%M %p')

    class Meta:
        model = StoreHour
        exclude = ['store']


class StoreDetailSerializer(StoreListSerializer):
    products = ProductSerializer(many=True, read_only=True)
    photos = PhotoSerializer(many=True, read_only=True)
    cover = serializers.ImageField()
    about = serializers.CharField()
    store_hour = StoreHourSerializer(read_only=True, many=True)
    timestamp = serializers.DateTimeField(format='%b %d, %Y')

    class Meta:
        model = Store
        fields = [
            'owner_name', 'name', 'cover', 'about',
            'latitude', 'longitude', 'products', 'photos',
            'store_hour', 'timestamp'
        ]


class StoreCreateSerializer(serializers.ModelSerializer):
    # cover = serializers.ImageField()
    # # owner = serializers.RelatedField(write_only=True, queryset=User.objects.all())

    class Meta:
        model = Store
        fields = [
            'name', 'address', 'about', 'cover'
        ]
