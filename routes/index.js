const route = require('express').Router();

route.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to the index of the route folder!' });
});

module.exports = route;