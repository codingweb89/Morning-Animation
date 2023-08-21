


let morning = "Good Morning!";
let night = "Good Night!";

const heading = document.querySelector(".heading");


function getTime() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setTimeout(getTime, 1000);

    let hoursText = document.querySelector(".hours");
    let minutesText = document.querySelector(".minutes");
    let secondsText = document.querySelector(".seconds");
    let persindText = document.querySelector(".persind");

    hoursText.textContent = hours + ":";
    minutesText.textContent = minutes + ":";
    secondsText.textContent = seconds;

    if(hours < 10) {
        hoursText.textContent = "0" + minutes + ":"
    }
    if(minutes < 10) {
        minutesText.textContent = "0" + minutes + ":";
    }
    if(seconds < 10) {
        secondsText.textContent = "0" + seconds
    }

    if(hours > 12) {
        persindText.textContent = "PM";
    }else {
        persindText.textContent = "AM";
    }
}

// getTime();


function GetTime(date, heading) {
    this.date = date;
    this.heading = heading;

    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();

    //set value textContents;
    this.hoursText = document.querySelector(".hours");
    this.minutesText = document.querySelector(".minutes");
    this.secondsText = document.querySelector(".seconds");
    this.persindText = document.querySelector(".persind");

    this.setTime = function() {
        this.hoursText.textContent = this.hours + ":";
        this.minutesText.textContent = this.minutes + ":";
        this.secondsText.textContent = this.seconds;

        if(this.hours < 10) {
            console.log("Hours is lessthan 12")
            this.hoursText.textContent = "0" + this.hours + ":"
        }
        if(this.minutes < 10) {
            this.minutesText.textContent = "0" + this.minutes + ":";
        }
        if(this.seconds < 10) {
            this.secondsText.textContent = "0" + this.seconds
        }
    
        if(this.hours > 12) {
            this.persindText.textContent = "PM";
            this.heading.textContent = night;
        }else {
            this.persindText.textContent = "AM";
            this.heading.textContent = morning;
        }

    }
}


function callTime() {
    let date = new Date();
    const getTime = new GetTime(date, heading);
    getTime.setTime();

    setTimeout(callTime, 1000)
}
callTime();

let position = 0;
function moveBird() {
    requestAnimationFrame(moveBird)
    const birdDiv = document.querySelector(".brids-div");
    birdDiv.style.left = position + "px";
    position += 1;
    let birdDivWidth = window.getComputedStyle(birdDiv).width;
    let regExt = /\d/g;
    let birdWidthConvert = birdDivWidth.match(regExt).join("");
    let add = Number(position) + Number(birdWidthConvert);

    if(add > innerWidth) {
        position = 0;
    }
}

moveBird()
