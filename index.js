'use strict';

const timeEl = document.querySelector('.time');
const [startBtn, resetBtn, stopBtn] = document.querySelectorAll('button');

let time = new Date(0);
const DELAY = 100;

let timerId = null;

startBtn.onclick = () => {
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    time.setMilliseconds(time.getMilliseconds() + DELAY);
    updateTimer(time);
  }, DELAY);
};

resetBtn.onclick = () => {
  time = new Date(0);
  updateTimer(time);
};

stopBtn.onclick = () => {
  clearInterval(timerId);
  timerId = null;
};

function updateTimer(time) {
  timeEl.textContent = `${formatMinutesOrSeconds(
    time.getMinutes()
  )}:${formatMinutesOrSeconds(time.getSeconds())}:${formatMilliseconds(
    time.getMilliseconds()
  )} `;
}

function formatMinutesOrSeconds(m) {
  return m < 10 ? `0${m}` : m;
}

function formatMilliseconds(ms) {
  return ms < 100 ? (ms < 10 ? `00${ms}` : `0${ms}`) : ms;
}
