FROM node:12.13.0-alpine

# make application directory
WORKDIR /usr/app

ENV PATH /usr/app/node_modules/.bin:$PATH

# copy pakcage.json to resolve dependency
COPY package.json /usr/app/package.json
RUN npm install

# copy source of app
COPY . /usr/app

# expose port of container to host machine
# EXPOSE 4000

CMD ["npm", "run", "watch"]
