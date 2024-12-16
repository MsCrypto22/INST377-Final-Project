const supabase = require("../../../Backend/Database/supabase")

app.get('.users', async (req, res) => {
    const {data, error} = await supabase.from('Users').select('*');
    if (error) {
        res.status(500).json({error: error.message});

    }   else {
        res.json(data);
    }
});

app.post('/users', async (req, res) => {
  const { name, email, password, birthdate } = req.body;
  const { data, error } = await supabase.from('Users').insert([
    { name, email, password, birthdate }
  ]);

  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});
