FROM alpine
RUN apk add -y --update nodejs npm
WORKDIR app
COPY ./package.json .
RUN npm install
COPY src ./
COPY public ./
COPY ./tsconfig.json .
RUN npm run build-release
RUN npm install -g serve
EXPOSE 8080
CMD serve -s build -l 8080
