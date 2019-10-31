$(document).ready(function() {

//VARIABLES FOR START TIME AND ALPHABET
	var startTime = -1;
	var alphabetStage = 0;
	console.log("timer is not working yet");

//CREATING A FUNCTION FOR WHEN THE FIRST LETTER "a" IS PRESSED
	$(window).keypress(function(event) {
		var keyPressedValue = event.keyCode - 97;
		if (startTime == -1) {
			if (keyPressedValue == 0) {
				startTime = new Date().getTime();
				//STARTS THE TIMER
				handleTimer(true);
				handleCorrectKeyPress(event);
				console.log("timer has started");
			}
		} else {
			//TURNS THE BACKGROUND GREEN AFTER IT'S REACHED THE LAST LETTER
			var timeElapsed = new Date().getTime() - startTime;
			if (alphabetStage == 25) {
				//INCREMENT 25 BECAUSE 26 LETTERS IN ALPHABET
				//NEXT CHARACTER AFTER Z WOULD BE {
				alphabetStage++;
				$('.page').css('background-color', 'green');
				$('.status-text').html('Done!');
				$('.time-text').html('Time: ' + timeElapsed);
				//STOPS THE TIMER
				handleTimer(false);
			} else if (keyPressedValue == alphabetStage) {
				handleCorrectKeyPress(event);
			}
		}
	});

//RESET BUTTON, WHEN CLICKED, BACKGROUND TURNS RED AGAIN AND TIMER RESETS
	$('.reset-button').click(function() {
		alphabetStage = 0;
		$('.page').css('background-color', 'red');
		$('.status-text').html("Next letter is 'a'!");
		$('.time-text').html('Time: Not started');
		//STOPS TIMER
		handleTimer(false);
		//RESETS TIMER
		startTime = -1;
		console.log("timer has reset");
	});

//FUNCTION FOR RANDOM BACKGROUND COLOUR PER KEY PRESS
	function handleCorrectKeyPress(event) {
		alphabetStage++;
		var x = Math.floor(Math.random()*255);
		var y = Math.floor(Math.random()*255);
		var z = Math.floor(Math.random()*255);
		var randomColour = 'rgb(' + x + ', ' + y + ', ' + z + ')';
		$('.page').css('background-color', randomColour);
		// STATUS TEXT FOR LIVE TEXT IN HTML
		$('.status-text').html("Next letter is '" + String.fromCharCode(event.keyCode + 1) + "'!");
	}

//SHOWS TIME ELAPSED, SUBTRACTS START TIME FROM CURRENT TIME
	function handleTimer(start) {
		if (start) {
			timer = setInterval(function() {
				var timeElapsed = new Date().getTime() - startTime;
				$('.time-text').html('Time: ' + timeElapsed);
			}, 1);
		} else {
			clearInterval(timer);
		}
	}
});
