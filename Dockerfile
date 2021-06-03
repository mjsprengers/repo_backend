FROM node:alpine
WORKDIR /api
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . . 

# The line below does not complete the Docker build. there using 'CMD'
# RUN npm build:prod

# NOt required, following https://maximorlov.com/exposing-a-port-in-docker-what-does-it-do/
# EXPOSE 3000
CMD [ "node" , "server.js" ]