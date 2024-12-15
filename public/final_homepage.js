document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Chart.js with updated data...');
  
    // Astrology-related data
    const astrologyData = {
      labels: [
        'Believe in Cosmic Guidance',
        'Check Horoscopes Weekly',
        'Rely on Astrology for Decisions',
        'Reduces Stress & Boosts Confidence',
        'Positive Impact on Career',
        'Relationship Advice',
        'Overly Reliant on Astrology',
        'Understanding Strengths & Weaknesses'
      ],
      datasets: [{
        label: 'Percentage of Respondents (%)',
        data: [80, 58, 72, 65, 63, 45, 42, 39],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(99, 255, 132, 0.6)',
          'rgba(162, 54, 235, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(99, 255, 132, 1)',
          'rgba(162, 54, 235, 1)'
        ],
        borderWidth: 1
      }]
    };
  
    // Chart configuration
    const config = {
      type: 'bar', // Bar chart to display the data
      data: astrologyData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            labels: {
              color: 'darkblue', // Legend text color
              font: {
                size: 14
              }
            }
          },
          title: {
            display: true,
            text: 'Astrology and Its Impact on Millennials & Gen Z',
            color: 'darkgreen', // Title text color
            font: {
              size: 18,
              weight: 'bold'
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: 'darkred', // X-axis label color
              font: {
                size: 12
              }
            }
          },
          y: {
            ticks: {
              color: 'darkred', // Y-axis label color
              font: {
                size: 12
              },
              beginAtZero: true // Y-axis starts at 0
            },
            title: {
              display: true,
              text: 'Percentage (%)',
              color: 'darkblue', // Y-axis title color
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          }
        }
      }
    };
  
    // Render the chart
    const ctx = document.getElementById('astrologyData').getContext('2d');
    new Chart(ctx, config);
  
    console.log('Astrology chart initialized successfully.');
  });

function getZodiacConstellations() {
    const zodiacImages = [
      "https://www.go-astronomy.com/images/constellations/Aries.jpg",
      "https://www.go-astronomy.com/images/constellations/Aquarius.jpg",
      "https://www.go-astronomy.com/images/constellations/Libra.jpg",
      "https://www.go-astronomy.com/images/constellations/Gemini.jpg",
      "https://www.go-astronomy.com/images/constellations/Capricornus.jpg",
      "https://www.go-astronomy.com/images/constellations/Taurus.jpg",
      "https://www.go-astronomy.com/images/constellations/Virgo.jpg",
      "https://www.go-astronomy.com/images/constellations/Leo.jpg",
      "https://www.go-astronomy.com/images/constellations/Pisces.jpg",
      "https://www.go-astronomy.com/images/constellations/Cancer.jpg",
      "https://www.go-astronomy.com/images/constellations/Scorpius.jpg",
      "https://www.go-astronomy.com/images/constellations/Sagittarius.jpg"
    ];
    const constellationCarousel = document.getElementById('mySlider');
    console.log(zodiacImages);

    for (const zImg of zodiacImages) {
      let imgElem = document.createElement('img');
        imgElem.src = zImg;
        imgElem.width = 600;
        imgElem.height = 600;
        console.log(imgElem.src);
        constellationCarousel.appendChild(imgElem);
    }

   simpleslider.getSlider({
        container: document.getElementById('mySlider'),
        transitionTime:1,
        delay:5.0
      });

}
// Added showConstellations() function to populate image slider 

function showConstellations() {
  getZodiacConstellations();
}
