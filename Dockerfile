#Base image taken from: https://github.com/cypress-io/cypress-docker-images
FROM cypress/included:10.3.0

#Create a folder where the project will be stored
RUN mkdir /my-cypress-project

#Make it the default work directory
WORKDIR /my-cypress-project

#Copy the essential files that must be used to run the scripts
COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
COPY ./testData ./testData
COPY ./tsconfig.json .
COPY ./yarn.lock .

#Install yarn and the dependencies in the work directory
RUN npm i -g corepack
RUN yarn install

#Executable commands the container will use
ENTRYPOINT ["npx","cypress","run"]

#The parameters to add to the entrypoint
CMD ["ENV"]