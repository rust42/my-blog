FROM --platform=linux/amd64 node:18-alpine3.18
WORKDIR app
COPY ./package.json .
RUN npm install
COPY ./src ./public ./tsconfig.json ./
RUN npm run build-release
RUN npm install -g serve
EXPOSE 8080
CMD serve -s build -l 8080
