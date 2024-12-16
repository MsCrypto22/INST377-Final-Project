# Astro Insights 🌌  
**Personalized, Reliable, and Visually Appealing Horoscope Application**

## Overview  
Astro Insights is a modern horoscope application designed to provide astrology enthusiasts with reliable, up-to-date daily horoscopes and compatibility insights. By leveraging the Horoscope API and integrating user preferences through Supabase, this app delivers a tailored and intuitive experience, free from clutter and distractions.

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
- **Compatibility Reports:** Understand compatibility with other zodiac signs.  
- **Historical Data Tracking:** Review past horoscopes and patterns over time.  
- **User Preferences:** Store and retrieve personalized settings for an optimized experience.  

---

## Technologies  
### Front-End  
- **Languages:** HTML, CSS, and JavaScript.  
- **Frameworks:** Pure JavaScript (option to extend with frameworks like React).  
- **Features:**  
  - Responsive and visually appealing UI.  
  - Interactive forms to collect user preferences.  

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
   - User preferences (e.g., zodiac sign) are stored in Supabase for easy retrieval.   
3. **Front-End Display:**  
   - A sleek and intuitive interface showcases the daily horoscope and additional insights.  

---

## Setup and Installation  
### Prerequisites  
- Node.js installed on your system.  
- A Supabase account with Supabase URL, Supabase API Key, and NASA APOD API key.  

### Steps  
1. Clone this repository:  
   ```bash
   git clone https://github.com/yourusername/astro-insights.git
   cd astro-insights

2. Install dependencies:  
   ```bash
   npm install
   ```  
3. Configure API keys:  
   - Add your NASA APOD API key to the environment file.  
   - Set up your Supabase database and connect it to the project.  

4. Start the development server:  
   ```bash
   npm start
   ```  
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

---

## License  
This project is licensed under the MIT License. See `LICENSE` for more information.
