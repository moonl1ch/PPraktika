const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('profile', { title: 'Профиль', user: req.session.user, orders: req.session.orders || [] });
  } else {
    res.render('profile', { title: 'Профиль', user: null });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    req.session.user = { name: 'User', username: 'user' };
    res.redirect('/profile');
  } else {
    res.send('Неверный логин или пароль');
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
