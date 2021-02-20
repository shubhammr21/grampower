from django.db.models import fields
from api.models import *
from django_filters import FilterSet
from django_filters.rest_framework import filters


""" 
class WebinarFilter(FilterSet):
    category = filters.CharFilter('category')
    speciality = filters.CharFilter('specialities__title')
    speaker_id = filters.CharFilter('speaker__id')

    class Meta:
        model = Webinar
        fields = ('category', 'speciality', 'speaker_id')
"""