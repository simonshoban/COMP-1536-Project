var date = new Date();							//Creates a variable that stores the current date (hours, minutes, seconds, etc..).

setTimeout(changeColour, 1);					//Invokes the changeColour() function after 1 millisecond.

if (date.getMinutes() == 0) {
	callEveryHour();							//If minutes are 0 (ex: 4:00, 19:00, etc...), invoke the callEveryHour() function.
} else {
	var nextHour = new Date();
	
	nextHour.setHour(date.getHours() + 1);		//
	nextHour.setMinutes(0);						//Sets nextHour to the next hour (ex: 15:36 becomes 16:00).
	nextHour.setSeconds(0);						//
	
	difference = nextHour - new Date();			//Calculates the difference between the next hour and the current time.
	
	setTimeout(callEveryHour(), difference);	//Invokes callEveryHour() at the next hour.
}

function callEveryHour() {
	setInterval(changeColour(), 3600000);		//Invokes changeColour() every hour (3,600,000 milliseconds).
}

function changeColour() {
	date = new Date();							//Gets the current date again in case the old one is no longer correct.
	var hours = date.getHours();
	var timeColour = "#112244";					//Night colour (8PM - 5AM)
	
	if (hours >= 5 && hours < 10) {
		timeColour = "#006699";					//Morning colour (5AM - 10AM)
	} else if (hours < 18) {
		timeColour = "#77DD99";					//Midday colour (10AM - 6PM)
	} else if (hours < 20) {
		timeColour = "#993333";					//Evening colour (6PM - 8PM)
	}
	
	document.getElementsByTagName("body")[0].style.background = "radial-gradient(circle, " + timeColour + ", #24292B)";	//Sets the background of <body> to timeColour.
}