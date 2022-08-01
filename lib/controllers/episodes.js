const { Router } = require('express');
const Episode = require('../models/Episode');

module.exports = Router()
  .get('/', async (req, res) => {
    const episodes = await Episode.getAll();
    const resp = episodes.map(episode => ({ 
      'id': episode.id, 
      'title': episode.title, 
      'season': episode.season, 
      'number': episode.number,
      'quotes': episode.quotes
    }));
    res.json(resp);
  });
