const path = require('path');
const express = require('express');
const pkg = require('./package');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;
app.locals.theme = {
  title: '你看我屌／牛逼不'
}

app.get('/', (req, res, next) => {
  res.render('resume');
});

app.listen(3000, function() {
  console.log(`${pkg.name} listening on port 3000`);
});
