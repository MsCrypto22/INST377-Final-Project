# Astro Insights 🌌  
**Personalized, Reliable, and Visually Appealing Horoscope Application**

## Overview  
Astro Insights is a modern horoscope application designed to provide astrology enthusiasts with reliable, up-to-date daily horoscopes and compatibility insights. By leveraging the Horoscope API and integrating user preferences through Supabase, this app delivers a tailored and intuitive experience, free from clutter and distractions.

Deployed on Vercel Here: [Astro Insights Vercel App](https://inst377finalprojverceldeploy.vercel.app/final_contact.html)

---

## Problem Statement  
Astrology enthusiasts often face challenges when seeking daily guidance based on their zodiac signs, including:  
- Cluttered platforms filled with ads.  
- Lack of personalization.  
- Incomplete or inconsistent astrological data.  

Astro Insights addresses these issues with a clean, user-friendly interface and holistic astrological insights tailored to each user.

---

## Stakeholders  
This project aims to serve the following groups:  
- **Astrology Enthusiasts:** Individuals who follow horoscopes and seek personalized insights.  
- **Wellness and Lifestyle Content Creators:** Those who use horoscope data to engage their audiences.  
- **App Developers:** Potential collaborators interested in extending or customizing the application.  
- **General Public:** Anyone curious about astrology and its potential guidance.  

---

## Features  
- **Daily Horoscopes:** Accurate, up-to-date zodiac insights.  
- **Zodiac Constellations:** Detailed maps of the stars that make up each zodiac constellation.  
- **Historical Data Tracking:** Review past horoscopes and patterns over time.  
- **User Preferences:** Store and retrieve personalized settings for an optimized experience.  

---

## Technologies  
### Front-End  
- **Languages:** HTML, CSS, and JavaScript.  
- **Frameworks:** Pure JavaScript, Express JS.  
- **Features:**  
  - Responsive and visually appealing UI.  
  - Interactive forms to collect user preferences.

## Target Browsers
- Microsoft Edge, Mozilla Firefox, and Android 

### Back-End  
- **API:**  
  - **Horoscope API**: Provides reliable horoscope data --> [Horoscope API](https://horoscope-app-api.vercel.app/) 
  - **NASA APOD API**: Provides daily Astronomy Pictures taken by NASA telescopes with the option to query based on a specified date --> [NASA APOD API Github Repository](https://github.com/nasa/apod-api) 
  - Custom API: Handles user preferences and historical horoscope data.  
- **Database:**  
  - **Supabase**: Stores user preferences, past horoscopes, and other metadata.  

---

## How It Works  
1. **Data Fetching:**  
   - The app fetches horoscope data from the Horoscope API based on the user’s zodiac sign.
   - Additionally, our app fetches a corresponding Astronomy Picture of the Day from a NASA API for any horoscope requests that input a specific date (e.g. birthdays)  
2. **Personalization:**  
   - User messages are stored in Supabase for us to reach out to them later about any concerns brought up.   
3. **Front-End Display:**  
   - A sleek and intuitive interface showcases the daily horoscope and additional insights.  

---

# Developer Manual

## Setup and Installation  
### Prerequisites  
- Node.js installed on your system.
- Some familiarity with Express JS and CORS (might give you some problems that need to be troubleshooted when trying to POST to our database). 
- A Supabase account with Supabase URL, and a Supabase API Key
- NASA APOD API key.  

### Steps
1. Clone this repository to your local environment (VS Code, Atom, Eclipse IDE, etc.):
   * Ceate the necessary folders to store the cloned project (e.g. astro-insights)
  ```
  git clone git@github.com:MsCrypto22/INST377-Final-Project.git
  cd INST377-Final-Project.git
  ```
2. Install dependencies:
   * All modules listed as dependencies in the package.json file cloned to local environment will be installed by typing the following into your terminal:  
   ```
   npm install
   ```  
3. Configure API keys:  
   - Navigate to public folder > final_horoscope.js > fetchNasaAPOD(date) function.
     * Update 'const apiKey' with your own NASA APOD Key which can be obtained at [NASA APIs](https://api.nasa.gov/?ref=its-foss)  
   - Set up your Supabase DB project and create your tables (leave RLS Policy unchecked) and connect it to the project.
     * Navigate to index.js
     * Update 'const SUPA_URL' with your project URL
     * Update 'const SUPA_API_KEY' with your supabase API Key    

4. Start the development server (created very basic Express JS app in index.js):  
   ```
   npm start
   ```  
## Understanding the Backend API
* We created 2 custom endpoints in index.js that interact with our front-end and our supabase db
  * '/zodiac' or 'http://localhost:3000/zodiac'
    * This endpoint sends a GET request to our supabase db which has a table already populated with historic modern events that characterize each zodiac sign and occurred during that zodiac signs date range
    * The backend just retrieves that data for us, but our front-end handles displaying the specific zodiac event to the UI when users input their zodiac sign in the form on the Zodiac Events page 
  * '/send_message' or 'http://localhost:3000/send_message'
    * This endpoint sends a POST request to our supabase db
    * On our About page, there is a contact form that site visitors can use to send us messages which will be stored in our database for us to review and fix any issues with the site that might be pointed out, or if users want to set up a consultation to have their Natal Chart discussed (things like that).

## Potential Troubleshooting Issues
* CORS rejecting any requests being sent through our '/send_message' endpoint
  * As of right now, our fix was to include the following in our index.js file
    ```
    const cors = require('cors');
    app.use(cors()); 
    ```
  * What this does is that it allows requests to our API from any origin (NOT SECURE AT ALL but a temporary fix)
    * For this reason, we only request non-sensitive PII or Personally Identifiable Information from the users of our app (i.e. birthday and name) in its current iteration   
---

## Future Enhancements  
- **Push Notifications:** Daily horoscope updates via email or SMS.  
- **Premium Features:** In-depth compatibility reports and detailed astrological charts.  
- **Social Sharing:** Share horoscope insights on social media.
- **Compatibility Insights:** Compatibility reports dynamically generated for selected zodiac sign.   

---

## Acknowledgments  
- [Horoscope API](https://horoscope-app-api.vercel.app/) for reliable horoscope data. 
- [NASA Astronomy Picture of the Day](https://github.com/nasa/apod-api) for consistently updated astronomy images to complement horoscopes.
- [Supabase](https://supabase.com/) for database management.
- [ChatGPT](https://chatgpt.com/) and OpenAI for providing historic event data for each zodiac sign.
- [Muhammad_Usman](https://www.flaticon.com/free-icons/calendar) and [Iconic Panda](https://www.flaticon.com/free-icons/ui) for providing the calendar icons used in the monthly horoscopes

---

## License  
This project is licensed under the MIT License. See `LICENSE` for more information.
