# Stage 1: Build React App
FROM node:18-alpine as builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy built files
COPY --from=builder /app/build /usr/share/nginx/html

# Optionally copy a default env-config.js (can be overridden later in K8s)
COPY ./public/env-config.js /usr/share/nginx/html/env-config.js

# Expose and run
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
