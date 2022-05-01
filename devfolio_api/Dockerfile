FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /api
COPY requirements.txt ./
RUN pip install -r requirements.txt
EXPOSE 8000