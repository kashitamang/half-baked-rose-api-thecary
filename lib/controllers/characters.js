const { Router } = require('express');
const Character = require('../models/Character');

module.exports = Router()
  .get('/', async (req, res) => {
    const characters = await Character.getAll();
    const resp = characters.map(character => ({ 
      'id': character.id, 
      'first_name': character.first_name, 
      'last_name': character.last_name, 
      quotes: character.quotes 
    }));
    res.json(resp);
  });
