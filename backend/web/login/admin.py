from django.contrib import admin
from .models import Publication, Technology, Activities, Memberlab

admin.site.register(Publication)
admin.site.register(Technology)
admin.site.register(Activities)
admin.site.register(Memberlab)