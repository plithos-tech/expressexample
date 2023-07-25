# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the root directory of your local project to the container
COPY . .

# Expose the port on which your Node.js application will be running (change it if needed)
EXPOSE 3000

# Start the Node.js application
CMD [ "node", "index.js" ]
