#stage 1
FROM node:latest as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run start
