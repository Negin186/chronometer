


// function start() {

//     var min = document.getElementById('minutes');
//     var sec = document.getElementById('seconds');
//     var sec = document.getElementById('miliSeconds');
//     var minutes = 0;
//     var seconds = 0;
//     var miliSeconds = 0;

//     var Interval;

//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 999);
// }

// function stop() {
//     clearInterval(Interval);
// }

// function reset() {
//     clearInterval(Interval);
//     sec.innerHTML = '00';
//     min.innerHTML = '00';
//     minutes = 0;
//     seconds = 0;
// }

// function startTimer() {
//     seconds++;

//     if (miliSeconds < 999) {
//         sec.innerHTML = "0" + seconds;
//     }

//     if (seconds > 59) {
//         sec.innerHTML = seconds;
//     }

//     if (seconds > 59) {
//         minutes++;
//         min.innerHTML = "0" + minutes;
//         seconds = 0;
//     }

//     if (minutes > 9) {
//         min.innerHTML = minutes;
//     }

// }


let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;

function start() {
    interval = setInterval(updateTime, 10); // هر 10 میلی‌ثانیه یک بار اجرا می‌شود
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById('milliseconds').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('minutes').innerText = '00';
}

function updateTime() {
    milliseconds += 10;
    if (milliseconds >= 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 59) {
        seconds = 0;
        minutes++;
    }

    document.getElementById('milliseconds').innerText = milliseconds < 100 ? '0' + (milliseconds / 10).toFixed(0) : (milliseconds / 10).toFixed(0);
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
}

// setInterval(start, 10); // اجرای تابع greet هر 2 ثانیه یک بار
