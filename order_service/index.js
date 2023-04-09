const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const { createOrder, getOrders } = require('./db');

const app = express();
app.use(bodyParser.json());

app.get('/orders', async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
});

app.post('/orders', async (req, res) => {
  const { userId, products } = req.body;
  const order = {
    id: uuidv4(),
    userId,
    products: products.map(({ productId, quantity }) => ({
      id: productId,
      quantity,
    })),
  };
  await createOrder(order);
  res.status(201).json({ order });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Order service listening on port ${PORT}`);
});
