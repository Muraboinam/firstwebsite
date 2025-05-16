FORM node:20-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FORM nginx:alpine
COPY --form=builder /app/dist/ /usr/share/nginx/html
COPY nginx.conf /ect/nginx/conf.d/default.conf
EXPOSE 8095
CMD ["nginx", "-g", "daemon off;"]