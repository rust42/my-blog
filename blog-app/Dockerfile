FROM --platform=linux/amd64 node:18-alpine3.18
WORKDIR app
COPY ./blog-app/package.json .
RUN npm install
COPY ./blog-app/src ./blog-app/public ./blog-app/tsconfig.json ./
RUN npm run build-release
RUN npm install -g serve
EXPOSE 8080
CMD serve -s build -l 8080
