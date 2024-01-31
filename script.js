// // Time
// function timeUpdate() {
//     // Get date object and find time values
//     let d = new Date();
//     let timeArr = [d.getHours(), d.getMinutes(), d.getSeconds()];
//
//     // Get text element to change
//     let element = document.getElementById("timeText");
//     let newH = timeArr[0];
//     let newM = timeArr[1];
//     let newS = timeArr[2];
//
//     // If values are single digit, add leading 0
//     if (timeArr[0] < 10) {
//         newH = `0${newH}`;
//     }
//     if (timeArr[1] < 10){
//         newM = `0${newM}`;
//     }
//     if (timeArr[2] < 10) {
//         newS = `0${newS}`;
//     }
//
//     // update element
//     element.innerHTML = `It is ${newH}:${newM}:${newS}`;
// }
//
// setInterval(timeUpdate, 500);

function showText1() {
    let txt = document.getElementById("text1");
    txt.style.opacity = 1;
}

function hideText1() {
    let txt = document.getElementById("text1");
    txt.style.opacity = 0;
}
