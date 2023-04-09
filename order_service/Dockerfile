# Use a lightweight Node.js image as base
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# RUN npm install -g grpc-tools

# Install dependencies
RUN npm i

# RUN grpc_tools_node_protoc \
#   --js_out=import_style=commonjs,binary:./ \
#   --grpc_out=./ \
#   --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
#   ./protos/order.proto

# Copy source code
COPY . .

EXPOSE 3000
EXPOSE 50052

# Start the REST API service
CMD ["npm", "start"]
