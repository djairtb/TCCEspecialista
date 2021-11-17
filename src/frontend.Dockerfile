
FROM node:16 as build-app

WORKDIR /app

COPY TCCFrontend/package*.json ./
RUN npm install
COPY TCCFrontend/. .
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]