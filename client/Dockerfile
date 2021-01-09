# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --production --cache-folder ./node_modules/

# add app
COPY . ./

# start app
CMD ["yarn", "start"]