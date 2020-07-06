FROM node:12

WORKDIR "/app"

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build:prod

CMD ["npm", "run", "start"]
EXPOSE 5000
