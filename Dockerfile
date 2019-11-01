FROM node:10.16.3-alpine

# make application directory
WORKDIR /usr/src/app

# copy pakcage.json to resolve dependency
COPY package.json ./
RUN npm install

# copy source of app
COPY . /usr/src/app

# expose port of container to host machine
EXPOSE 4000

CMD ["bash"]
