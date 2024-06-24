# Use Node.js version 14 LTS
FROM node:14-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application files to the container
COPY . .

# Expose port 4000
EXPOSE 4000

# Command to run the application
CMD ["node", "server.js"]
