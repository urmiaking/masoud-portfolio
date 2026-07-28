# Lightweight Nginx Container for Masoud Khodadadi Portfolio
FROM nginx:alpine

# Copy all static assets to default Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 inside container
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
