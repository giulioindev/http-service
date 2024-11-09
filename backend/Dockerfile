FROM python:3.12-slim-bullseye AS builder

RUN pip install poetry==1.8.3

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/tmp/poetry_cache \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

WORKDIR /app

COPY . ./

RUN poetry install --only main && rm -rf $POETRY_CACHE_DIR

FROM python:3.12-slim-bullseye AS runtime

ENV VIRTUAL_ENV=/app/.venv \
    PATH="/app/.venv/bin:$PATH" \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1

COPY --from=builder ${VIRTUAL_ENV} ${VIRTUAL_ENV}

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y curl && apt-get install -y gettext

EXPOSE ${BACKEND_PORT}

ENTRYPOINT python manage.py migrate && python manage.py runserver 0.0.0.0:${BACKEND_PORT}