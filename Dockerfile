FROM node:10
RUN mkdir /practice-docker
ADD . /practice-docker
WORKDIR /practice-docker
RUN npm i
EXPOSE 80
CMD ["npm", "start"]