FROM node:18 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -f
COPY . .
RUN npm run build
CMD npm start

FROM nginx:alpine
COPY ./conf /etc/nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
