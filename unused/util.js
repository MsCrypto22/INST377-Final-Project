require('dotenv').config();

const axios = require('axios');

// Fetch function for NASA API
async function fetchNASAImage(date) {
    try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod', {
            params: {
                api_key: process.env.Ebw7L1gWc3zrtHKHhgyi2fEXm19OtjiewcymJE0t, // Reference the key stored in the .env file
                date: date, 
            },
        });
        return response.data; 
    } catch (error) {
        console.error('Error fetching data from NASA API:', error.message);
        throw new Error('Failed to fetch NASA image.');
    }
}

module.exports = { fetchNASAImage };


