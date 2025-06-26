let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time');
const title = document.getElementById('title');

function padStart(value) {
    return value.toString().padStart(2, '0');
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}


function startClock() {
    if (interval) {
        stopClock();
    }
    interval = setInterval(timer, 1000);
    title.innerHTML = "Clock is running";    
}

function stopClock() {
    clearInterval(interval);
    title.innerHTML = "Clock is stopped";
}   

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
    title.innerHTML = "Clock is reset"; 
}   