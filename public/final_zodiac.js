// remove all white space and periods from a string: str.replace(/[\s.]/g, '');

async function getZodiac() {
    var user_input = document.getElementById('zodiac_sign').value;
    var user_zodiac = user_input.replace(/[\s.]/g, '').toLowerCase();
    console.log(user_zodiac);

    await fetch('http://localhost:3000/zodiac')
        .then((res) => res.json())
        .then((resJson) => {
            for(let i = 0; i < resJson.length; i++) {
                let compare = resJson[i].zodiac_sign.toLowerCase();

                if(compare == user_zodiac) {
                    var event_descr = resJson[i].event_description;
                    var event_date = resJson[i].event_date;
                    break;
                    
                }
            
            }

        let zodiacContainer = document.getElementById('zodiacResultsContainer');
        let zodiacContent = document.createElement('div');
        zodiacContainer.innerHTML = ""; // Empty container for successive calls without reloading page
        //Updating attribute already styled with CSS to make results box appear "dynamically"
        zodiacContent.setAttribute('id','zodiacResults');

        let zodiacElem = document.createElement('h2');
        zodiacElem.textContent = "On this day in history under your Zodiac: ";

        let eventDescr = document.createElement('p');
        eventDescr.setAttribute('id', 'eventPara');
        eventDescr.textContent = "" + event_descr ;

        let dateOfHeader = document.createElement('h3');
        dateOfHeader.setAttribute('id', 'dateH3');
        dateOfHeader.textContent = "Date: " + event_date;

    
        //Append to inner content element
        zodiacContent.appendChild(zodiacElem);
        zodiacContent.appendChild(dateOfHeader);
        zodiacContent.appendChild(eventDescr);

        //Lastly, append to container
        zodiacContainer.appendChild(zodiacContent);
    
        })
}