// event listener
let button = document.querySelector("#myButton");
let messageDisplay = document.querySelector("#messageDispaly");

button.addEventListener("click", function() {
    messageDisplay.textContent = "Button Clicked"

    setTimeout(function() {
        messageDisplay.textContent = ""; // empty the text content of the element
    }, 3000);
    });

    const box = document.querySelector('.box');
    box.addEventListener("mouseover", function(){
        box.textContent = 'Mouse Over';
    })


    //console.log(this); // this is the element that was clicked on, in this case it's myButton

// button.addEventsListener("click", function()
// {
    // messageDisplay.textContent = "Button Clicked"
// //console.log("Butoon Clicked");
// });