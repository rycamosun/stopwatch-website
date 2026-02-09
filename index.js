const startBtn = document.getElementById('start');
const endBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

const hourDisplay = document.getElementById('hour');
const minuteDisplay = document.getElementById('minute');
const secondDisplay = document.getElementById('second');

let hour = 0o0;
let minute = 0o0;
let second = 0o0;
let timerInterval;

startBtn.addEventListener('click', () => {
	const timeout = 1000;

	timerInterval = setInterval(() => {
		second += 1;

		const limit = 60;
		if (second === limit) {
			second = 0;
			minute += 1;
		}

		if (minute === limit) {
			minute = 0;
			hour += 1;
		}

		const padding = 10;
		hourDisplay.textContent = hour < padding ? `0${hour}` : hour;
		minuteDisplay.textContent = minute < padding ? `0${minute}` : minute;
		secondDisplay.textContent = second < padding ? `0${second}` : second;
	}, timeout);
})

endBtn.addEventListener('click', () => {
	clearInterval(timerInterval);
})

resetBtn.addEventListener('click', () => {
	clearInterval(timerInterval);
	hour = 0;
	minute = 0;
	second = 0;

	hourDisplay.textContent = "00";
	minuteDisplay.textContent = "00";
	secondDisplay.textContent = "00";
})