from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from fastapi.responses import JSONResponse
from fastapi.exceptions import RequestValidationError
from starlette.middleware.exceptions import ExceptionMiddleware
from typing import AsyncGenerator




# logger = get_logger(__name__)

# @asynccontextmanager
# async def lifespan_manager(_app: FastAPI) -> AsyncGenerator[None, None]:
#     try:
#         await pg_sdk.connect()
#         logger.info("PostgreSQL connected successfully")

#         yield  
#     finally:
#         await pg_sdk.close()
#         logger.info("PostgreSQL connection pool closed")


app = FastAPI(
    title="FastAPI Project",
    description="FastAPI project demo",
    version="demo",
    # lifespan=lifespan_manager,
)



app.add_middleware(
    CORSMiddleware,  # 跨域处理
    allow_origins=[
        "http://localhost:3010"
    ],  
    allow_credentials=True,
    allow_methods=["*"],  # 允许所有方法
    allow_headers=["*"],  # 允许所有头部
)


@app.post("/lobechat/boss_count")
async def boss_count():
    return {
    "status": 200,
    "message": "OK",
    "data": {
        "assistant_count": 1,
        "topic_count": 3,
        "message_count": 12,
        "word_count": 1710,
        "activity": [
            {
                "count": 0,
                "date": "2024-02-19",
                "level": 0
            },
            {
                "count": 0,
                "date": "2024-02-20",
                "level": 0
            },
            {
                "count": 0,
                "date": "2024-02-21",
                "level": 0
            },
            {
                "count": 0,
                "date": "2024-02-22",
                "level": 0
            },
            {
                "count": 0,
                "date": "2024-02-23",
                "level": 0
            },
            {
                "count": 0,
                "date": "2024-02-24",
                "level": 0
            }
        ],
        "model_use": [
            {
                "name": "gpt-4o",
                "message_count": 6
            },
            {
                "name": "gpt-4o-mini",
                "message_count": 6
            }
        ],
        "assistant_use": [
            {
                "name": "xinxiao",
                "topic_count": 3
            },
            {
                "name": "xinxiao1",
                "topic_count": 3
            }
        ],
        "topic_content": [
            {
                "name": "Greeet",
                "message_count": 6
            },
            {
                "name": "Greeet111",
                "message_count": 6
            }
        ],
        "person_detail": [
            {
                "name": "123",
                "email": "邮箱",
                "assistant_count": 1,
                "topic_count": 3,
                "message_count": 12
            },
            {
                "name": "123444",
                "email": "邮箱444",
                "assistant_count": 1,
                "topic_count": 3,
                "message_count": 12
            }
        ]
    }
}


@app.post("/lobechat/person_detail")
async def person_detail():
    return{
  "status": 200,
  "message": "OK",
  "data": [
    {
      "name": "123",
      "email": "邮箱",
      "assistant_count": 1,
      "topic_count": 3,
      "message_count": 12
    },
    {
      "name": "123444",
      "email": "邮箱444",
      "assistant_count": 1,
      "topic_count": 3,
      "message_count": 12
    }
  ]
}
 

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8004)