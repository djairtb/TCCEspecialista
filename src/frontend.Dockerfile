
FROM node:latest as build-app

WORKDIR /app

COPY TCCFrontend/package*.json ./
RUN npm install
COPY TCCFrontend/. .
RUN npm run build
COPY --from=build-app /app/dist /app/app/dist
EXPOSE 3000
CMD [ "npm start" ]
