const second = 1000,
	  minute = second * 60,
	  hour 	 = minute * 60,
	  day	 = hour * 24;

const targetDate = new Date("11:30 Feb 25, 2024").getTime(), 
x = setInterval(() => {
	const now = new Date().getTime(),
		 dist = targetDate - now;

	document.getElementById("days").innerText = Math.floor(dist / day);
	document.getElementById("hours").innerText = Math.floor((dist % day) / hour);
	document.getElementById("minutes").innerText = Math.floor((dist % hour) / minute);
	document.getElementById("seconds").innerText = Math.floor((dist % minute) / second);
});
