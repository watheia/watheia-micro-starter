# This file is a template, and might need editing before it works on your project.
FROM node:lts-alpine as builder

# Uncomment if use of `process.dlopen` is necessary
RUN apk add --no-cache libc6-compat

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app
COPY . .
RUN yarn && yarn react-scripts build

FROM nginx:alpine

COPY --from=builder /app/build  /usr/share/nginx/html

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE ${PORT}
