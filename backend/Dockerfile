# Use Node.js LTS
FROM node:20

WORKDIR /app

# Copy package.json first and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]
