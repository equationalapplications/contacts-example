# Set the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose the port (5000 is common for Express apps)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
