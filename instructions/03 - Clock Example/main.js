setInterval(function () {

    // Get current time: 
    let currTime = new Date();

    // Get the DOM object: 
    let clock = document.getElementById("clock");

    // Display current time: 
    clock.innerText = currTime.toLocaleTimeString();

}, 1000);