var date = new Date();							//Creates a variable that stores the current date (hours, minutes, seconds, etc..).

setTimeout(changeColour, 1);					//Invokes the changeColour() function after 1 millisecond.

if (date.getMinutes() == 0) {
	callEveryHour();							//If minutes are 0 (ex: 4:00, 19:00, etc...), invoke the callEveryHour() function.
} else {
	var nextHour = new Date();
	
	nextHour.setHours(date.getHours() + 1);		//
	nextHour.setMinutes(0);						//Sets nextHour to the next hour (ex: 15:36 becomes 16:00).
	nextHour.setSeconds(0);						//
	
	difference = nextHour - new Date();			//Calculates the difference between the next hour and the current time.
	
	setTimeout(callEveryHour(), difference);	//Invokes callEveryHour() at the next hour.
}

function callEveryHour() {
	setInterval(changeColour(), 3600000);		//Invokes changeColour() every hour (3,600,000 milliseconds).
}

function changeColour() {
	var hours = new Date().getHours();			//Gets the hour every time the function is called.
	var timeColour;
	
	var red = 0;								//If it's before noon, the colours will go from dark blue to light blue.
	var green = 36;
	var blue = 72;
	var multiplier = 1;
	
	if (hours >= 12) {							//If it's past noon, the colours will go from light blue to dark blue.
		multiplier = -1;
		red = 96;
		green = 180;
		blue = 255;
		hours -= 12;
	}
	
	red += multiplier * 8 * (hours);			//Tricky math stuffs
	green += multiplier * 12 * (hours);
	blue += multiplier * 15 * (hours);
	
	timeColour = "rgb(" + red + ", " + green + ", " + blue + ")";	
	//alert("timeColour: " + timeColour);
	
	document.getElementsByTagName("body")[0].style.background = "radial-gradient(circle, " + timeColour + ", rgb(36, 41, 34))";	//Sets the background of <body> to timeColour.
}