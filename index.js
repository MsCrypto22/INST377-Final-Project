const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'));

const SUPA_URL = 'https://tddnoshnqkiqrmadtezg.supabase.co';
const SUPA_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkZG5vc2hucWtpcXJtYWR0ZXpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQyOTE1NTgsImV4cCI6MjA0OTg2NzU1OH0.-jNAdJPYLEVIL409NcoYSGVmVVhFMCvMa_NqdDxChfY';

const supabase = supabaseClient.createClient(SUPA_URL, SUPA_API_KEY);

// API endpoints
app.get('/zodiac', async (req, res) => {
    console.log('Attempting to retrieve zodiac event');
    const {data, error} = await supabase
        .from('zodiacEvents')
        .select();

    console.log('Data retrieved:', data);
    console.log('Error:', error);

    if(error) {
        console.log('Error:', error);
        res.send(error);
    }

    res.send(data);
});

app.listen(port, () => {
    console.log('App is up and running')
})

