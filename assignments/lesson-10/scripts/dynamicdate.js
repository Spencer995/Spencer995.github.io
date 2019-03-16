

	function getWeekDays(date){
		var weekDays = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat');
		var today = date.getDay();
		return weekDays[today];
	}						
	
	var nextDay1 = new Date();
	var nextDay2 = new Date();
	var nextDay3 = new Date();
	var nextDay4 = new Date();
	var nextDay5 = new Date();
	
	nextDay1.setDate(nextDay1.getDate());
	nextDay2.setDate(nextDay2.getDate() +1);
	nextDay3.setDate(nextDay3.getDate() + 2);
	nextDay4.setDate(nextDay4.getDate() + 3);
	nextDay5.setDate(nextDay5.getDate() + 4);						
	
	var nextWeekDay1 = getWeekDays(nextDay1);
	var nextWeekDay2 = getWeekDays(nextDay2);
	var nextWeekDay3 = getWeekDays(nextDay3);
	var nextWeekDay4 = getWeekDays(nextDay4);
	var nextWeekDay5 = getWeekDays(nextDay5);
	
	document.getElementById('day1').innerHTML = nextWeekDay1;
	document.getElementById('day2').innerHTML = nextWeekDay2;
	document.getElementById('day3').innerHTML = nextWeekDay3;
	document.getElementById('day4').innerHTML = nextWeekDay4;
	document.getElementById('day5').innerHTML = nextWeekDay5;

