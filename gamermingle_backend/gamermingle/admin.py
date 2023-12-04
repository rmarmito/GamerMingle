from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import CustomUser

class UserAdmin(BaseUserAdmin):
    # Define admin panels for custom fields
    fieldsets = BaseUserAdmin.fieldsets + (
        (None, {'fields': ('discord', 'steam', 'riotid', 'about', 'profile_picture')}),
    )
    add_fieldsets = BaseUserAdmin.add_fieldsets + (
        (None, {'fields': ('discord', 'steam', 'riotid', 'about', 'profile_picture')}),
    )

admin.site.register(CustomUser, UserAdmin)
