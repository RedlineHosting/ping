FROM node:alpine

WORKDIR /app
COPY . /app

EXPOSE 9091

RUN npm install

CMD [ "npm", "start"]
