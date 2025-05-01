FROM node:18-alpine as builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . ./

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx:stable-alpine

# Copy React static files
COPY --from=builder /app/build /usr/share/nginx/html

# ✅ Copy env.sh script to entrypoint location
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


