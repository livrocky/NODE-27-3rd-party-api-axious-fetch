const express = require('express');

const norisRouter = express.Router();

// Routes
norisRouter.get('/joke', async (req, res) => {
  res.json('getting a joke');
});

module.exports = norisRouter;
