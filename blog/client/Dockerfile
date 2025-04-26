# 1st stage: build the React app
FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# 2nd stage: serve with nginx
FROM nginx:stable-alpine

# Remove the default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
