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

# Build the Next.js app
RUN npm run build

# Expose the port (3000 is the default for Next.js)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
