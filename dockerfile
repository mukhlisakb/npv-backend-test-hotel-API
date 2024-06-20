FROM node:14

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y postgresql-client

COPY package*.json ./

RUN npm install

COPY . .

COPY .wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

RUN npm run build

CMD ["./wait-for-it.sh", "db", "npm", "start"]
