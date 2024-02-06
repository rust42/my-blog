FROM alpine
RUN apk add -y --update nodejs npm
# WORKDIR app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY src ./src 
COPY public ./public
COPY tsconfig.json .
RUN npm run build --omit=dev
RUN npm install -g serve
EXPOSE 8080
CMD serve -s build -l 8080
