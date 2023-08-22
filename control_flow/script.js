/*let isStudent = false;// use true to use first statement
if (isStudent) 
{
    console.log('You will get a free ticket');
}
else {
    console.log('The master class ticket goes for Ksh1500');
}*/


//import readline from 'readline';
/*const readline = require ('readline');

const rl = readline.createInterface(
    {
       input: process.stdin,
       output :process.stdout,
    }
)
rl.question('Are you a student? (yes/no)' , (answer) => {
    answer = answer.toLowerCase();
    let isStudent = false;// use true to use first statement
if (isStudent) 
{
    console.log('You will get a free ticket');
}
else {
    console.log('The master class ticket goes for Ksh1500');
}
rl.close();
})*/


// for (let i = 0; i <= 100; i++)
// {
//     console.log(i)
// }
// for (let i = 0; i <= 100; i++)
//  {
//     if ((i %2 === 0))// even numbers checker
//     if ((i %2 !== 0))// odd numbers checker
//      console.log(i);
//  }

// let i = 2;
// //let i = 2;//print even numbers
// while(i <=100)
// {
//     console.log(`the value of the loop ${i}`);
//     i++; //print all numbers
//     //i+=2 //print odd numbers

// }

const dayOfWeek = 'Tuesday';

switch (dayOfWeek){
    case "Monday":
        console.log("Its a Monday");
        break ;
    case "Tuesday":
        console.log("it's Tuesday");
        break;
    case "Wednesday":
        console.log("it's Wednesday");
        break;
    case "Thursaday":
        console.log("it's Thursday");
        break;
    case "Friday":
        console.log("it's almost weekend");
        break;
    case "Saturday":
        console.log("it's weekend!!!!!");
        break;
        case "Sunday":
        console.log("it's the Lords day");
        break;
    default:
        console.log(`${dayOfWeek}, is not a day of the week`);
}