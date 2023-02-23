let time = 0;
const interval = setInterval(() => {
	console.log(`hello ${time}`);
	time += 1;
	if (time === 10) {
		clearInterval(interval);
	}
}, 2000);
