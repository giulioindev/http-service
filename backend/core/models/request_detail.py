from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from core.models.uuid_audit_model import UUIDAuditModel


class RequestDetail(UUIDAuditModel):
    """Request detail model."""

    status = models.PositiveIntegerField(validators=[MinValueValidator(200), MaxValueValidator(500)])
    errors = models.JSONField()
    data = models.JSONField()

    class Meta:
        db_table = "request_details"
        verbose_name_plural = "request_details"
