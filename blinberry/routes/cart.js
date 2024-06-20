const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const deliveryFee = 100;
  const cart = req.session.cart || [];
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  const finalTotal = total + deliveryFee;
  res.render('cart', { title: 'Корзина', user: req.session.user, cart, deliveryFee, total, finalTotal });
});

router.post('/checkout', (req, res) => {
  const order = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    cart: req.session.cart || [],
    promocode: req.body.promocode
  };
  req.session.orders = req.session.orders || [];
  req.session.orders.push(order);
  req.session.cart = [];
  res.send('Заказ оформлен!');
});

router.post('/add', (req, res) => {
  const { name, price, img } = req.body;
  req.session.cart = req.session.cart || [];
  req.session.cart.push({ name, price: parseInt(price, 10), img });
  res.json({ success: true });
});

router.post('/remove', (req, res) => {
  const { name } = req.body;
  req.session.cart = req.session.cart || [];
  req.session.cart = req.session.cart.filter(item => item.name !== name);
  res.json({ success: true });
});

module.exports = router;
