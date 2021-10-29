
FROM node:latest as build-app

WORKDIR /app

COPY TCCBackend/package*.json ./
RUN npm install
COPY TCCBackend/. .
EXPOSE 4000
CMD [ "node", "app.js"]
