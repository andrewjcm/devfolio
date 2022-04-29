# pull official base image
FROM node:latest

# set working directory
WORKDIR /frontend

COPY package.json ./
RUN npm install
EXPOSE 3000