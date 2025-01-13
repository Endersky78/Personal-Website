# Use the official Node.js image as a base
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your application runs on
EXPOSE 8000

# Specify the command to run your app
CMD ["npm", "run", "start"]
