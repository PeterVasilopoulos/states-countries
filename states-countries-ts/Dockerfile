# Development
FROM node:20-alpine AS base
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev", "--", "--host"]

# Production
FROM nginx:latest AS final
WORKDIR /app
COPY --from=base /app/build /usr/share/nginx/html
EXPOSE 5137
CMD ["nginx", "-d", "daemon off"]