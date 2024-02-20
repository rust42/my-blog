FROM alpine as Builder
RUN apk add -y --update nodejs npm
# WORKDIR app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY src ./src 
COPY public ./public
COPY tsconfig.json .
RUN npm run build --omit=dev


FROM alpine as Deployer
RUN apk add -y --update nodejs npm
COPY --from=Builder build ./
RUN npm install -g serve
EXPOSE 8080
CMD serve -s . -l 8080
