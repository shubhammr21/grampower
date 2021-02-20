from django.contrib import admin
from .models import *

admin.site.index_title = "Gram Power Technical Test"
admin.site.site_header = "Gram Power Technical Test"

'''
@admin.register(Speciality)
class SpecialityAdmin(admin.ModelAdmin):
    list_display = ['title', 'description',
                    'order', 'icon', 'status']
    list_filter = ['status']
    # empty_value_display = 'Unknown Item field'
    # list_display_links = None
    # list_editable = None
    list_per_page = 50
    # list_max_show_all
    # search_fields = []
    # show_full_result_count = True
    # date_hierarchy = ''
    # actions_on_top
    actions_on_bottom = True
'''
