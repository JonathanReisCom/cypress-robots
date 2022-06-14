FROM node:12-alpine

# INSTALL DEPENDENCIES IN DOCKER IMAGE
RUN apk add --no-cache python3 py3-pip git make g++
RUN pip install awscli --upgrade pip awscli

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY . .

EXPOSE 8000

CMD [ "yarn", "run", "start" ]