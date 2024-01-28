function timeUpdate() {
    // Get date object and find time values
    let d = new Date();
    let timeArr = [d.getHours(), d.getMinutes(), d.getSeconds()];

    // Get text element to change
    let element = document.getElementById("timeText");

    // If seconds are single digit, add leading 0
    if (timeArr[2] < 10) {
        element.innerHTML = `It is ${timeArr[0]}:${timeArr[1]}:0${timeArr[2]}`;
    }
    else {
        element.innerHTML = `It is ${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
    }
}

setInterval(timeUpdate, 500);