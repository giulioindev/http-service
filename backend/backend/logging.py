from typing import Any

from structlog import configure
from structlog import get_logger as structlog_get_logger
from structlog.contextvars import merge_contextvars
from structlog.processors import (
    CallsiteParameter,
    CallsiteParameterAdder,
    StackInfoRenderer,
    TimeStamper,
    UnicodeDecoder,
    dict_tracebacks,
)
from structlog.stdlib import (
    BoundLogger,
    LoggerFactory,
    PositionalArgumentsFormatter,
    ProcessorFormatter,
    add_log_level,
    add_logger_name,
    filter_by_level,
)
from structlog.types import Processor


def configure_logging() -> None:
    """Configure logging."""
    processors: list[Processor] = [
        merge_contextvars,
        filter_by_level,
        TimeStamper(fmt="iso"),
        dict_tracebacks,
        add_logger_name,
        CallsiteParameterAdder([CallsiteParameter.LINENO]),
        add_log_level,
        PositionalArgumentsFormatter(),
        StackInfoRenderer(),
        UnicodeDecoder(),
        ProcessorFormatter.wrap_for_formatter,
    ]
    configure(
        processors=processors,
        logger_factory=LoggerFactory(),
        cache_logger_on_first_use=True,
    )


def get_logger(*args: Any, **initial_values: Any) -> BoundLogger:
    """Wrapper for structlog's get_logger function.

    Args:
        args:
            *Optional* positional arguments that are passed unmodified to the
            logger factory.  Therefore it depends on the factory what they
            mean.

        initial_values: Values that are used to pre-populate your contexts.

    Returns:
        BoundLogger: Structlog's BoundLogger instance.
    """
    logger: BoundLogger = structlog_get_logger(*args, **initial_values)
    return logger
