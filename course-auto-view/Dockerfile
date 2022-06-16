FROM cypress/included:10.1.0

WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .
COPY package-lock.json .

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm ci

# Verify that Cypress has been installed correctly.
RUN npx cypress verify

# Reset the `cypress run` entrypoint set by the `cypress/included` image
ENTRYPOINT []
CMD [ "tail", "-f", "/dev/null" ]
