const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const menuItems = [
    { name: 'Классический блин', price: 300, img: '/images/classic-pancake.jpg' },
    { name: 'Ягодный блин', price: 350, img: '/images/berry-pancake.jpg' },
    { name: 'Шоколадный блин', price: 400, img: '/images/chocolate-pancake.jpg' },
    { name: 'Яблочный блин', price: 350, img: '/images/apple-pancake.jpg' },
    { name: 'Банановый блин', price: 370, img: '/images/banana-pancake.jpg' },
    { name: 'Сырный блин', price: 330, img: '/images/cheese-pancake.jpg' },
    { name: 'Грибной блин', price: 360, img: '/images/mushroom-pancake.jpg' },
    { name: 'Ягодный блин', price: 350, img: '/images/berry-pancake.jpg' },
    { name: 'Шоколадный блин', price: 400, img: '/images/chocolate-pancake.jpg' }
  ];
  res.render('menu', { title: 'Меню', user: req.session.user, menuItems });
});

module.exports = router;
