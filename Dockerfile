FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm global add serve


EXPOSE 80

CMD ["npx", "serve", "-s", "build"]
