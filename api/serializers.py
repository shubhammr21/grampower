from django.db.models import fields
from django.db.models.query_utils import select_related_descend
from rest_framework import serializers
from rest_framework.utils import model_meta
from .models import *
from django.utils.timesince import timesince, timeuntil

"""
# TODO
"""


""" Custom Fields for relavant data """


'''
class SpeakerIsFollowField(serializers.RelatedField):
    # queryset = Webinar.objects.all()
    # def get_queryset(self):
    #     return queryset
    # TODO: verify here to check follow speaker
    def to_representation(self, value):
        user = self.context['request'].user
        if user.is_authenticated:
            try:
                speaker_follow = user \
                    .userprofile.speakers \
                    .filter(id=value) \
                    .exists()
                if speaker_follow:
                    return True
            except Exception as e:
                print(f'{e}')
                # raise serializers.ValidationError(
                #     {"error": f"{str(e)}"})
        return False
'''


""" Serializers """
