from django.contrib import admin

from core.models.request_detail import RequestDetail


@admin.register(RequestDetail)
class RequestDetailAdmin(admin.ModelAdmin):
    """RequestDetail representation in admin interface."""
