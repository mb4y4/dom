//document.write("hello world");

/*let age = 50;
let Age = 40;
let AGE = 30;

console.log(AGE);*/

//variable
//var age = 25;
//console.log(age);

/* boolean below
let isStudent = false;

if (isStudent) {
    console.log("you should work hard");
} else{
    console.log("you can just sleep");
}*/

//let name = "Denis";

//let myName = null;

//let fruit;
//console.log(fruit);

//objects
//literal format or properties
/*let person = {
    firstName : "Dennis",
    lastName : "Mbaya",
    gender : "male",
    age : 31,
    isStudent : true,
}
console.log(person.age);*/

/*class Person {
    constructor(firstName, lastName, gender, age, isStudent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
    }
}

const denis = new Person("Dennis", "Mbaya", "male", "31", true)
denis.nationality = 'Kenyan';
const grace = new Person("Grace", "Guantai", "female", "26", false)

console.log(grace);
console.log(denis);*/

//let fruits = ["apples", "mangoes", 'pineapples']
//console.log(fruits);
//console.log(fruits.indexof('mangoes'));

/*let events  = [
    {
        name: 'birthday Party',
        date: '2023-08-22',
        location: 'Uhuru Park',
        attendees: 'Reagan, David, William, Denis',
    },
    {
        name: 'Music Festival',
        date: '2023-08-25',
        location: 'Sarit Park',
        attendees: 'Reagan, David, William, Denis',
    }
]
//console.log(events);
//console.log(events[0]);
//console.log(events[1]);

console.log(events[0].date);*/


/*let events  = [
    {
        title: 'Birthday Party',
        date: '2023-08-22',
        location: 'Uhuru Park',
        attendees: 'Reagan, David, William, Denis',
    },
    {
        title: 'Music Festival',
        date: '2023-08-25',
        location: 'Sarit Park',
        attendees: 'Reagan, David, William, Denis',
    },
    {
        title: 'Graduation',
        date: '2023-10-02',
        location: 'CUEA Gardens',
        attendees: 'Reagan, David, William, Denis',
    },
]
//console.log(events);
//console.log(events[0]);
//console.log(events[1]);
//console.log(events[0].date);

let isEvent= false;

if (isEvent) {
    console.log("no event");
} else{
    console.log("one event");
}*/





const events = [
    {
      title: "Birthday Party",
      date: new Date("2023-08-25"),
      location: "Uhuru Park",
      attendees: new Set(),
    },
    {
      title: "Music Festival",
      date: new Date("2023-08-21"),
      location: "Sarit Center",
      attendees: new Set(),
    },
    {
      title: "Graduation",
      date: new Date("2023-08-19"),
      location: "Zindua School Grounds",
      attendees: new Set(),
    },
  ];

  //console.log(events);
  
  // Create a WeakMap for event organizers
  const organizers = new Map();
  organizers.set(events[0].title, "Dennis Mbaya");
  organizers.set(events[1].title, "Mwalimu Churchill");
  organizers.set(events[2].title, "Ezekiel Kibiego");

  //Display events happening in the next 7 days using filter and map
  const upcomingEvents = events.filter(event => {
    const today = new Date();
    const sevenDaysLater = new Date(today);
    return event.date >= today && event.date <= sevenDaysLater;
  });
 
  
  const upcomingEventDetails = upcomingEvents.map(event => ({
    title: event.title,
    date: event.date.toDateString(),
    location: event.location,
    attendees: [...event.attendees],
  }));
  
  console.table(upcomingEventDetails);
  
  
  
  
  
  
  
  
  /*// Function to add a new attendee to an event
  function addAttendee(eventTitle, attendeeName) {
    const event = events.find(event => event.title === eventTitle);
    if (event) {
      event.attendees.add(attendeeName);
    }
  }
  
  // Function to convert events array to JSON with custom formatting
  function eventsToJSON() {
    const formattedEvents = events.map(event => ({
      ...event,
      formattedDate: `${event.date.getMonth() + 1}/${event.date.getDate()}/${event.date.getFullYear()}`,
    }));
    return JSON.stringify(formattedEvents);
  }
  
  // Display properties and values of the first event using Object methods
  const firstEvent = events[0];
  console.log("Properties:", Object.keys(firstEvent));
  console.log("Values:", Object.values(firstEvent));
  console.log("Entries:", Object.entries(firstEvent));
  
  // Use forEach to log title and date of each event
  events.forEach(event => {
    console.log(`Event: ${event.title}, Date: ${event.date.toDateString()}`);
  });
  
  // Add attendees to events
  addAttendee("Birthday Party", "Alice");
  addAttendee("Music Festival", "Bob");
  addAttendee("Graduation ", "Charlie");
  
  
  //console.log(eventsToJSON());*/



/*// Function to delete an event by title
function deleteEvent(eventTitle) {
    const indexToDelete = events.findIndex(event => event.title === eventTitle);
    if (indexToDelete !== -1) {
      events.splice(indexToDelete, 1);
      organizers.delete(eventTitle);
      console.log(`Event "${eventTitle}" has been deleted.`);
    } else {
      console.log(`Event "${eventTitle}" not found.`);
    }
  }
  
  // Delete an event by title
  deleteEvent("Conference");
  
  // Display updated list of events
  console.log("Updated Events List:", events);*/
  




