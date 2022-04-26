# pull official base image
FROM node:latest

# set working directory
WORKDIR /frontend

COPY package.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
EXPOSE 3000