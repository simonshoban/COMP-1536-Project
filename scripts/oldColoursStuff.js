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

if (count == 0) {
	timeColour = "#006699";					//Morning colour (5AM - 10AM)
} else if (count == 1) {
	timeColour = "#66AADD";					//Midday colour (10AM - 6PM)
} else if (count == 2) {
	timeColour = "#EE4444";					//Evening colour (6PM - 8PM)
} else if (count == 3) {
	timeColour = "#112244";					//Night colour (8PM - 5AM)
} else {
	timeColour = "#FF9F37";					//Sunrise colour
}
