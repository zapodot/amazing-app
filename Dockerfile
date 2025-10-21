FROM node:24-alpine
COPY package*.json src/ ./

# Download and build
RUN npm install && npm run build

# Copy built files
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
