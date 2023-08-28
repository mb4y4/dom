// Create an array to hold the event objects
const events = [
    {
      title: "Workshop on Web Development",
      date: new Date("2023-08-25T14:00:00"),
      location: "Virtual",
      attendees: new Set(["Alice", "Bob", "Charlie"])
    },
    {
      title: "Conference on JavaScript Frameworks",
      date: new Date("2023-08-27T09:30:00"),
      location: "City Convention Center",
      attendees: new Set(["David", "Eve", "Frank", "Grace"])
    },
    {
      title: "Tech Meetup: AI and JavaScript",
      date: new Date("2023-09-18T18:00:00"),
      location: "Tech Hub Co-working Space",
      attendees: new Set(["Hannah", "Isaac", "Julia"])
    }
    
  ];
// const currentDate = new Date();
// const nextSevenDays = new Date (currentDate.getTime{} + 7 *24 *60 *60 *1000)
// const upcomingEvents = events.filter(myEvent = myEvent.date <= nextSevenDays)




  function dispayEvents() {
    const eventslist = document.getElementById('eventsList');

  // Print out the event details
  events.forEach(event => 
      {
        const eventCard = document.createElement('li');
        eventCard.className = 'col-md-4 mb-4'
        eventCard.innerHTML = `
        <strong>${event.title}(/string)
        Date: ${event.date.toDateString()}
        Location:${event.location}
        Attendees: (${[...event.attendees].join(', ')})`;

  })};