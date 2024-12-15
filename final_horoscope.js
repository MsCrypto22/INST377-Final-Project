
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, ready for user input.');
    
  
    
    document.getElementById('submitBtn').addEventListener('click', async () => {
      console.log('Submit button clicked');
      const day = document.getElementById('day').value;
      const month = document.getElementById('month').value;
      const year = document.getElementById('year').value;

      console.log('Day:', day, 'Month:', month, 'Year:', year);
  
      // Validate input
      if (!day || !month || !year) {
        console.log('Invalid input detected');
        alert('Please enter a valid day, month, and year!');
        return;
      }

      console.log('Valid input, proceeding with API calls...');
      // Format date for NASA API (YYYY-MM-DD)
      const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  
      // Determine Zodiac sign based on birthday
      const zodiacSign = getZodiacSign(parseInt(day), parseInt(month));
  
      try {
        // Fetch horoscope
        const horoscopeData = await fetchHoroscope(zodiacSign);
        console.log('Horoscope:', horoscopeData);
  
        // Fetch NASA APOD
        const apodData = await fetchNasaAPOD(formattedDate);
        console.log('NASA APOD:', apodData);
  
        // Update UI with results
        updateUI(zodiacSign, horoscopeData, apodData);
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('An error occurred while fetching data. Please try again.');
      }
    });
  });
  
  // Function to determine Zodiac sign based on day and month
  function getZodiacSign(day, month) {
  const signs = [
    ['Capricorn', 19], 
    ['Aquarius', 18],  
    ['Pisces', 20],    
    ['Aries', 19],     
    ['Taurus', 20],    
    ['Gemini', 20],    
    ['Cancer', 22],    
    ['Leo', 22],       
    ['Virgo', 22],     
    ['Libra', 22],     
    ['Scorpio', 21],   
    ['Sagittarius', 21] 
  ];

  // Handle December after the 21st correctly
  if (month === 12 && day > signs[month - 1][1]) {
    return signs[0][0]; // Capricorn for December 22 onward
  }

  // Default case for other months
  return day > signs[month - 1][1] ? signs[month][0] : signs[month - 1][0];
}
  
  // Function to fetch horoscope
  async function fetchHoroscope(sign, day = "TODAY") {
    const endpoint = `https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=${sign}&day=${day}`;
  
    const response = await fetch(endpoint) 

    return response.json();
   /* .then((resp) => resp.json())
    .then((data) => {

      return resp.json();

    })
  */
   /*try {
      const response = await fetch(endpoint);
      
      // Log raw response for debugging
      console.log(await response.text()); 
  
      // Check for valid JSON response
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Invalid response format: Expected JSON");
      }
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Horoscope Data:", data);
      return data;
    } catch (error) {
      console.error("Failed to fetch horoscope:", error);
      return null;
    }
    */
  }
  
  // Function to fetch NASA APOD
  async function fetchNasaAPOD(date) {
  const apiKey = 'wKeq374VeUXqgnK3BfoCivpRywZVdLy2VmjDcpUI'; 
  const earliestDate = '1995-06-16'; // NASA's first APOD image
  const endpointBase = 'https://api.nasa.gov/planetary/apod';

  // Ensure the date is not earlier than the earliest allowed date
  if (new Date(date) < new Date(earliestDate)) {
    alert(`The NASA APOD API only supports dates from ${earliestDate}. Using ${earliestDate} instead.`);
    date = earliestDate;
  }

  const endpoint = `${endpointBase}?api_key=${apiKey}&date=${date}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('NASA APOD Data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching NASA APOD data:', error);
    alert('Failed to fetch NASA APOD data. Please try again later.');
    throw error;
  }
}
  
  // Function to update UI with fetched data
  function updateUI(sign, horoscopeData, apodData) {
    document.getElementById("zodiacSign").innerText = `Your Zodiac Sign: ${sign}`;
  
    // Handle missing or invalid horoscope data
    if (horoscopeData && horoscopeData.data) {
      document.getElementById("horoscope").innerText = horoscopeData.data.horoscope_data;
    } else {
      document.getElementById("horoscope").innerText = "Horoscope data is unavailable.";
    }
  
    // Handle missing or invalid APOD data
    if (apodData && apodData.title && apodData.url && apodData.explanation) {
      document.getElementById("apodTitle").innerText = apodData.title;
      document.getElementById("apodImage").src = apodData.url;
      document.getElementById("apodDescription").innerText = apodData.explanation;
    } else {
      document.getElementById("apodTitle").innerText = "NASA APOD data is unavailable.";
      document.getElementById("apodImage").src = "";
      document.getElementById("apodDescription").innerText = "";
    }
  
    document.getElementById("results").style.display = "block";
  }

  // Add functions for weekly and monthly horoscope
  // Added few lines of code to empty div containers for weekly and monthly horoscope
  async function getWeeklyHoroscope() {
    const userDay = document.getElementById('day_week').value;
    const userMonth = document.getElementById('month_week').value;
    const zodiacWeek = getZodiacSign(userDay, userMonth);
    await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/weekly?sign=${zodiacWeek}`)
    .then((resp) => resp.json())
    .then((data) => {


      let weekContainer = document.getElementById('weeklyResultsContainer');
      let weekContent = document.createElement('div');
      weekContainer.innerHTML = ""; // Empty container for successive calls without reloading page
      //Updating attribute already styled with CSS to make results box appear "dynamically"
      weekContent.setAttribute('id','weeklyResults');

      let zodiacElem = document.createElement('h2');
      zodiacElem.textContent = "(ﾉ◕ヮ◕)ﾉ*・ﾟ✧ OOO! A " + zodiacWeek + "! Hmm...let's see here:";

      let weekForecast = document.createElement('p');
      weekForecast.setAttribute('id', 'weekPara');
      weekForecast.textContent = "" + data.data.horoscope_data ;

      let weekOfHeader = document.createElement('h3');
      weekOfHeader.setAttribute('id', 'weekH3');
      weekOfHeader.textContent = "Inclusion Dates:";

      let weekOfText = document.createElement('p');
      weekOfText.setAttribute('id', 'weekOf');
      weekOfText.textContent = "" + data.data.week;
  
      //Append to inner content element
      weekContent.appendChild(zodiacElem);
      weekContent.appendChild(weekForecast);
      weekContent.appendChild(weekOfHeader);
      weekContent.appendChild(weekOfText);

      //Lastly, append to container
      weekContainer.appendChild(weekContent);
    })

  }

  async function getMonthlyHoroscope() {
    const userDayM = document.getElementById('day_month').value;
    const userMonthM = document.getElementById('month_month').value;
    const zodiacMonth = getZodiacSign(userDayM, userMonthM);
    await fetch(`https://horoscope-app-api.vercel.app/api/v1/get-horoscope/monthly?sign=${zodiacMonth}`)
    .then((resp) => resp.json())
    .then((data) => {


      let monthContainer = document.getElementById('monthlyResultsContainer');
      monthContainer.innerHTML = ""; // Empty out 
      let monthContent = document.createElement('div');
      // Updating attribute already styled with CSS to make results box appear "dynamically"
      monthContent.setAttribute('id','monthlyResults');
      let monthCalInfo = document.createElement('div');
      monthCalInfo.setAttribute('id', 'cal_days');

      let zodiacElemM = document.createElement('h2');
      zodiacElemM.textContent = "How's it going " + zodiacMonth + "? " + data.data.month + " will be interesting for you: ";

      let monthForecast = document.createElement('p');
      monthForecast.setAttribute('id', 'monthPara');
      monthForecast.textContent = "" + data.data.horoscope_data ;

      let challengeElem = document.createElement('img');
      challengeElem.setAttribute('id', 'challenge_icon');
      challengeElem.src = 'https://cdn-icons-png.flaticon.com/512/11516/11516315.png';
      challengeElem.width = 100;
      challengeElem.height = 100;
     
      let challengeH3 = document.createElement('h3');
      challengeH3.setAttribute('id', 'monthChallengeH3');
      challengeH3.textContent = "A few challenging days: ";

      let challengeDays = document.createElement('p');
      challengeDays.setAttribute('id', 'challenge_text');
      challengeDays.textContent = "" + data.data.challenging_days;

      let noteableElem = document.createElement('img');
      noteableElem.setAttribute('id', 'noteable_icon');
      noteableElem.src = 'https://cdn-icons-png.flaticon.com/512/10710/10710704.png';
      noteableElem.width = 100;
      noteableElem.height = 100;
     
      let noteableH3 = document.createElement('h3');
      noteableH3.setAttribute('id', 'monthNoteableH3');
      noteableH3.textContent = "But a few standout days as well: ";

      let noteableDays = document.createElement('p');
      noteableDays.setAttribute('id', 'noteable_text');
      noteableDays.textContent = "" + data.data.standout_days;
  
      //Append to inner content elements
      monthContent.appendChild(zodiacElemM);
      monthContent.appendChild(monthForecast);

      monthCalInfo.appendChild(challengeElem);
      monthCalInfo.appendChild(challengeH3);
      monthCalInfo.appendChild(challengeDays);

      monthCalInfo.appendChild(noteableElem);
      monthCalInfo.appendChild(noteableH3);
      monthCalInfo.appendChild(noteableDays);

      //Lastly, append to container
      monthContent.appendChild(monthCalInfo);
      monthContainer.appendChild(monthContent);

  })
}