const express = require('express'),
  app = express(),
  cors = require('cors');
(routes = require('./src/api')), (bodyParser = require('body-parser'));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

app.use('/', routes);

app.use((error, req, res, next) => {
  return res.status(500).send({ error: error.message });
});

module.exports = app;