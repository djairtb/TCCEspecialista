
FROM node:14 as build-app

WORKDIR /app

COPY TCCBackend/package*.json ./
RUN npm install --quiet --force
COPY TCCBackend/. .
EXPOSE 4000
CMD [ "node", "app.js"]
