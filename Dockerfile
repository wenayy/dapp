FROM node:20-alpine

# Install build deps + libusb
RUN apk add --no-cache python3 make g++ bash libusb-dev

WORKDIR /app

COPY package*.json ./
RUN npm ci   # better than npm install if you have package-lock.json

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
    