const path = require('path');
const express = require('express');
const pkg = require('./package');

const app = express();
const isDev = process.env.NODE_ENV !== 'production';

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;
app.locals.theme = {
  title: '你看我屌／牛逼不'
}

if (isDev) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackDevConfig = require('./webpack.config.js');

  const compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.get('/', (req, res, next) => {
  res.render('resume');
});

app.listen(3000, function() {
  console.log(`${pkg.name} listening on port 3000`);
});
