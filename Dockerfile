FROM node:carbon-alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

RUN echo "nameserver 8.8.8.8" >> /etc/resolv.conf
RUN echo "nameserver 8.8.4.4" >> /etc/resolv.conf

# Install app dependencies
COPY package.json /usr/app/

RUN npm install

ADD . /usr/app

ENV PORT 3000
EXPOSE 3000

CMD [ "npm", "start" ]