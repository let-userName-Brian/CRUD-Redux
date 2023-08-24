#stage 1
FROM node:14-slim
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
RUN npm run start
