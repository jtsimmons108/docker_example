FROM node:12.3

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY app.js ./

EXPOSE 3000

