FROM node:14-alpine

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD ["npm", "run", "dev"]
