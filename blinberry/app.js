const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 3017;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

const indexRouter = require('./routes/index');
const menuRouter = require('./routes/menu');
const deliveryRouter = require('./routes/delivery');
const contactRouter = require('./routes/contact');
const cartRouter = require('./routes/cart');
const profileRouter = require('./routes/profile');

app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/delivery', deliveryRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);
app.use('/profile', profileRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
