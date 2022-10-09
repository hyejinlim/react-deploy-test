FROM node:14-alpine as builder

WORKDIR /usr/src/app
COPY . .

RUN yarn install
RUN REACT_APP_MODE=DEV REACT_APP_API_URL=https://dev-api.address.com yarn build

FROM nginx:1.19-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
