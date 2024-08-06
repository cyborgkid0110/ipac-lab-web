from django.contrib import admin

from .models import Activity,Publication,Technology,MemberLab

admin.site.register(Activity)
admin.site.register(Publication)
admin.site.register(Technology)
admin.site.register(MemberLab)