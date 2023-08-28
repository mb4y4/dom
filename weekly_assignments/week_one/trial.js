const calendarEvents = [
    {
        title: 'Nairobi Tech Summit',
        date: new Date('2023-08-30'),
        location: 'KICC',
        attendees: new Set(['Alice', 'Reagan', 'David', 'William', 'Denis'])
    },
    {
        title: "Safari Photography Workshop",
        date: new Date("2023-10-05"),
        location: "Maasai Mara National Reserve",
        attendees: new Set(["Eve", "Frank", "Grace"])
      },
      {
        title: "Kenyan Cultural Festival",
        date: new Date("2023-09-20"),
        location: "Uhuru Park, Nairobi",
        attendees: new Set(["Hassan", "Isabella", "James", "Kate", "Liam"])
      },
      {
        title: "Innovation Conference",
        date: new Date("2023-11-15"),
        location: "Strathmore University, Nairobi",
        attendees: new Set(["Megan", "Nathan", "Olivia", "Peter"])
      },
      {
        title: "Kenya Wildlife Conservation Seminar",
        date: new Date("2023-10-25"),
        location: "Kenya Wildlife Service Headquarters, Nairobi",
        attendees: new Set(["Quincy", "Rachel", "Samuel"])
      }
    ]
    
    const currentDate = new Date();
    
    const nextSevenDays = new Date(currentDate.getTime() + 7 * 24 * 60 * 60* 1000 );
    
    const upcomingEvents = calendarEvents.filter(myEvent => myEvent.date <= nextSevenDays);
    
    function displayUpcomingEvents() {
        const eventsList = document.getElementById('upcomingEventsList');
    
        upcomingEvents.map(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'col-md-4 mb-4'
            eventCard.innerHTML = `
            
            <div class="card">
              <div class="card-body">
                 <h5 class="card-title">${event.title}</h5>
                 <p class="card-text">Date: ${event.date.toDateString()}</p>
                 <p class="card-text">Location: ${event.location}</p>
                 <p class="card-text"> Attendees: ${Array.from(event.attendees).join(", ")}</p>
    
               </div>
            </div>
            `;
            eventsList.appendChild(eventCard);
          });
    }
    document.addEventListener('DOMContentLoaded', displayUpcomingEvents);
    
    
    
    
    
    function displayEvents() {
        const eventsList = document.getElementById('eventsList');
    
        calendarEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'col-md-4 mb-4'
            eventCard.innerHTML = `
            
            <div class="card">
              <div class="card-body">
                 <h5 class="card-title">${event.title}</h5>
                 <p class="card-text">Date: ${event.date.toDateString()}</p>
                 <p class="card-text">Location: ${event.location}</p>
                 <p class="card-text"> Attendees: ${Array.from(event.attendees).join(", ")}</p>
    
               </div>
            </div>
            `;
            eventsList.appendChild(eventCard);
          });
        
    }
    
    document.addEventListener('DOMContentLoaded', displayEvents);