const { Router } = require('express');
const { Quote } = require('../models/Quote');

module.exports = Router()
  .post('/', async (req, res) => {
    const quotes = await Quote.insert(req.body);
    res.json(quotes);
  });
