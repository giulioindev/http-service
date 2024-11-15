from uuid import uuid4

from django.db import models


class UUIDAuditModel(models.Model):
    """Abstract model having id as uuid4, creation and update datetimes."""

    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        abstract = True
