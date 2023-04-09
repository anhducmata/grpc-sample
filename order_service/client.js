const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./protos/order.proto');
const OrderService =
  grpc.loadPackageDefinition(packageDefinition).order.OrderService;

const client = new OrderService(
  'localhost:50052',
  grpc.credentials.createInsecure()
);

function createOrder(userId, products) {
  // products: [{productId: 1, quantity: 2}]
  const orderRequest = { userId, products };
  return new Promise((resolve, reject) => {
    client.createOrder(orderRequest, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

function getOrders() {
  const emptyRequest = {};
  return new Promise((resolve, reject) => {
    client.getOrders(emptyRequest, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.orders);
      }
    });
  });
}

async function test() {
  const order = await createOrder('123', [{ productId: 'binh', quantity: 1 }]);
  console.log(order);
  const orders = await getOrders();
  console.log(orders);
}

test();
