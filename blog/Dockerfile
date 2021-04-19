# This file is a template, and might need editing before it works on your project.
FROM node:lts-alpine

# Uncomment if use of `process.dlopen` is necessary
RUN apk add --no-cache libc6-compat

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app
COPY . .

ENV PORT=5200
EXPOSE ${PORT}

RUN yarn install && yarn build
CMD [ "yarn", "start" ]
