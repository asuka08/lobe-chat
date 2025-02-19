FROM --platform=linux/amd64  python:3.12-slim AS builder

WORKDIR /app

# 设置时区为 UTC+8
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
# 复制项目文件到容器中
COPY . /app/
RUN pip install -r /app/requirements.txt

EXPOSE 8004

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8004", "--log-level", "warning"]


# docker build . --file Dockerfile --tag syner-docker.tencentcloudcr.com/asuka08/lobe_chat_sql:test
# docker push syner-docker.tencentcloudcr.com/asuka08/lobe_chat_sql:test
# docker build . --file Dockerfile --tag syner-docker.tencentcloudcr.com/asuka08/lobe_chat_sql:test

# #!/bin/bash
# docker-compose pull && docker-compose down && docker-compose up -d && docker image prune -f