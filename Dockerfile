FROM node:12.10.0-alpine

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN npm install

COPY . /usr/src/

CMD ["npm", "start"]