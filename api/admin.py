from django.contrib import admin
from django.apps import apps
from .models import *

admin.site.index_title = "Gram Power Technical Test"
admin.site.site_header = "Gram Power Technical Test"

for i in apps.get_models():
    try:
        admin.site.register(i)
    except Exception:
        pass
