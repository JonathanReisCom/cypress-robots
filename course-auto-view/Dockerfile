# FROM cypress/base:14
FROM cypress/included:10.1.0
# FROM cypress/browsers:node16.5.0-chrome94-ff93

WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm ci

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify

# Reset the `cypress run` entrypoint set by the `cypress/included` image
ENTRYPOINT []
CMD [ "tail", "-f", "/dev/null" ]
