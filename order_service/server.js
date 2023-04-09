const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { createOrder, getOrders } = require('./db');

const packageDefinition = protoLoader.loadSync('./protos/order.proto');
const OrderService =
  grpc.loadPackageDefinition(packageDefinition).order.OrderService;

async function handleCreateOrder(call, callback) {
  const { userId, products } = call.request;
  const order = {
    id: Math.random().toString(36).substring(2, 15),
    userId,
    products: products.map(({ productId, quantity }) => ({
      id: productId,
      quantity,
    })),
  };
  await createOrder(order);
  callback(null, order);
}

async function handleGetOrders(call, callback) {
  const orders = await getOrders();
  callback(null, { orders });
}

function main() {
  const server = new grpc.Server();
  server.addService(OrderService.service, {
    createOrder: handleCreateOrder,
    getOrders: handleGetOrders,
  });
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log('Order gRPC service listening on port 50051');
      server.start();
    }
  );
}

main();
