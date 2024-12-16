app.get('/nasa-images', async (req, res) => {
  const { data, error } = await supabase.from('NASA Images').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});


app.post('/nasa-images', async (req, res) => {
  const { date, title, url, description } = req.body;
  const { data, error } = await supabase.from('NASA Images').insert([
    { date, title, url, description }
  ]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

