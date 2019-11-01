FROM node:12.13.0-alpine

# make application directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# copy pakcage.json to resolve dependency
COPY package.json /app/package.json
RUN npm install

# copy source of app
COPY . /app

# expose port of container to host machine
# EXPOSE 4000

CMD ["npm", "run", "watch"]
