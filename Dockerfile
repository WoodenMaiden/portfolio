FROM node:latest as build

COPY . /build
WORKDIR /build
RUN npm i 
RUN npm run build

FROM nginx:latest

COPY --from=build /build/build/ /usr/share/nginx/html