FROM node:10-alpine
WORKDIR /workspace
COPY package.json yarn.lock /workspace/
RUN yarn install
COPY . /workspace
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "start"]
