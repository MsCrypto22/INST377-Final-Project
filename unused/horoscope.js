app.get('/horoscopes/:sign', async (req, res) => {
  const { sign } = req.params;
  const { data, error } = await supabase.from('Horoscopes').select('*').eq('sign', sign);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});


app.post('/horoscopes', async (req, res) => {
  const { sign, date, prediction } = req.body;
  const { data, error } = await supabase.from('Horoscopes').insert([
    { sign, date, prediction }
  ]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});
const express = require('express');
const router = express.Router();
const supabase = require('../db/supabase');

// Get horoscope by zodiac sign
router.get('/:sign', async (req, res) => {
  const { sign } = req.params;
  const { data, error } = await supabase.from('Horoscopes').select('*').eq('sign', sign);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Add a new horoscope
router.post('/', async (req, res) => {
  const { sign, date, prediction } = req.body;
  const { data, error } = await supabase.from('Horoscopes').insert([{ sign, date, prediction }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;
