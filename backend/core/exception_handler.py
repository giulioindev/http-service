from django.core.exceptions import ObjectDoesNotExist
from drf_standardized_errors.handler import ExceptionHandler as BaseExceptionHandler
from rest_framework.exceptions import NotFound


class ExceptionHandler(BaseExceptionHandler):
    """Exception handler class."""

    def convert_known_exceptions(self, exc: Exception) -> Exception:
        """Convert exceptions to DRF equivalent.

        Args:
            exc (Exception): Exception.

        Returns:
            Exception: Converted exception.
        """
        exception = super().convert_known_exceptions(exc)
        if isinstance(exception, ObjectDoesNotExist):
            return NotFound(str(exc))
        return exception
