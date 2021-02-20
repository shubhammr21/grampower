import os
from django.db import models
from django.contrib.auth import get_user_model
from django.utils import timezone
from django.utils.text import slugify
from django.utils.translation import ugettext_lazy as _
from ckeditor.fields import RichTextField
from api.managers import StepManager

User = get_user_model()

"""
# TODO :
"""

HANDOUT = 1
TRANSCRIPT = 2
TEASER = 3
FULL_VIDEO = 4
FILE_TYPE = (
    (HANDOUT, 'Handout'),
    (TRANSCRIPT, 'Transcript'),
    (TEASER, 'Teaser'),
    (FULL_VIDEO, 'Full_Video'),
)

CATEGORIES = (
    ('automated_live', 'Automated Live'),
    ('upcoming', 'Upcoming Automated'),
    ('24x7', '24x7 Club')
)

PUBLISH = 1
PUBLISHED = 2
PUBLISH_STATUS = (
    (PUBLISH, 'Publish'),
    (PUBLISHED, 'Published'),
)
