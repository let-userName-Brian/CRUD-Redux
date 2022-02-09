#stage 1
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:alpine
COPY --from=node /app/dist/crud-redux /usr/share/nginx/html

# docker build -t brianhardy89/angular-app:latest .
# docker push brianhardy89/angular-app:latest
# docker run -d -p 80:80 brianhardy89/angular-app:latest