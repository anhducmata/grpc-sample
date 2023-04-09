const fs = require('fs');
const path = require('path');

const ordersFile = path.join(__dirname, 'orders.json');

// Helper function to load orders from the JSON file
function loadOrders() {
  try {
    const data = fs.readFileSync(ordersFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error loading orders: ${err.message}`);
    return [];
  }
}

// Helper function to save orders to the JSON file
function saveOrders(orders) {
  try {
    const data = JSON.stringify(orders);
    fs.writeFileSync(ordersFile, data, 'utf8');
  } catch (err) {
    console.error(`Error saving orders: ${err.message}`);
  }
}

// Function to create a new order
function createOrder(order) {
  // Load existing orders from the JSON file
  const orders = loadOrders();
  console.log('create order');
  // Create the new order object
  const newOrder = {
    id: order.id,
    userId: order.userId,
    products: order.products,
    createdAt: new Date().toISOString(),
  };

  // Add the new order to the array
  orders.push(newOrder);

  // Save the updated orders array to the JSON file
  saveOrders(orders);

  return newOrder;
}

// Function to retrieve all orders
function getOrders() {
  // Load existing orders from the JSON file
  const orders = loadOrders();

  return orders;
}

module.exports = { createOrder, getOrders };
