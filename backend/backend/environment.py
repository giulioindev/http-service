from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict

from backend.constants import LogLevel


class Environment(BaseSettings):
    """Parser class for the environment file."""

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    postgres_db: str = Field(description="Database name")
    postgres_user: str = Field(description="Database user name")
    postgres_password: str = Field(description="Database password")
    postgres_host: str = Field(description="Database host")
    postgres_port: int = Field(description="Database port")
    backend_host: str = Field(description="Backend host")
    backend_port: int = Field(description="Backend port")
    frontend_host: str = Field(description="Frontend host")
    frontend_port: int = Field(description="Frontend port")
    log_level: LogLevel = Field(LogLevel.DEBUG, description="Log level to be used.")
    secret_key: str = Field(
        "django-insecure-(#1zedq+p-@dfs%g^*ajw8kv&x9&+=!7s1fsrikpjed)9o58*i", description="Django secret key."
    )
