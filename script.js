// script.js
let timer;
let seconds = 0;
let isRunning = false;

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById('time-display').innerText = formatTime(seconds);
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function pauseTimer() {
    if (!isRunning) return;
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
    document.getElementById('lap-list').innerHTML = '';
}

function recordLap() {
    if (!isRunning) return;
    const lapList = document.getElementById('lap-list');
    const lapTime = document.createElement('li');
    lapTime.textContent = formatTime(seconds);
    lapList.appendChild(lapTime);
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('pause-btn').addEventListener('click', pauseTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
document.getElementById('lap-btn').addEventListener('click', recordLap);

// Initialize display
updateDisplay();
