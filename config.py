import os
from functools import lru_cache
from typing import Optional

from pydantic import BaseModel
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_PATH = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


class PostgreSQLSettings(BaseSettings):
    host: str = "localhost"
    port: int = 5432
    user: Optional[str] = None
    password: Optional[str] = None
    db: str = "yeepay"
    model_config = SettingsConfigDict(env_prefix="POSTGRES_")



class Settings(BaseSettings):
    """应用配置"""

    # PostgreSQL 配置
    pg: PostgreSQLSettings = PostgreSQLSettings()
    
    
    model_config = SettingsConfigDict(
        env_file=os.path.join(BASE_PATH, ".env"),
        env_file_encoding="utf-8",
        # env_nested_delimiter="_",  # 修改分隔符为下划线
        case_sensitive=False,
        extra="ignore",  # 忽略.env中的多余环境变量
    )

@lru_cache
def get_settings() -> Settings:
    """获取应用配置（使用缓存）"""
    return Settings()

settings = get_settings()

if __name__ == "__main__":
    settings = get_settings()
    print(f"PostgreSQL settings: {settings.pg}")

