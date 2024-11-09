from django.contrib import admin

from core.models.request_info import RequestInfo


@admin.register(RequestInfo)
class RequestInfoAdmin(admin.ModelAdmin):
    """RequestInfo representation in admin interface."""
