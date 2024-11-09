from enum import auto, unique

from django.db import models


@unique
class LogLevel(models.TextChoices):
    """Log level name."""

    DEBUG = auto()
    INFO = auto()
    WARNING = auto()
    ERROR = auto()
    CRITICAL = auto()
