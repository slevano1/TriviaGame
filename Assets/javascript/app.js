//Countdown Timer//
countdown (10, 'countdown');


function countdown (seconds, elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Time Remaining: " + seconds + " seconds";
	if (seconds < 1 ) {
		clearTimeout (timer);
		element.innerHTML = "<h2>Time\'s Up!</h2>";
		/*element.innerHTML += '<a href="#">Text Here</a>';*/
	}

	seconds --;
	var timer = setTimeout('countdown('+seconds+',"'+elem+'")', 1000);
}
console.log(countdown); 






//Quiz Complete Button//
function check() {

//Answer Key and Counter//
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

		if (question1 === 'San Francisco Giants') {
			correct++;
		}
		if (question2 === 'All of The Above') {
			correct++;
		}
		if (question3 === 'Cat') {
			correct++;
		}
//Array//
var messages = ["Great Job!", "You did...Okay.", "Not So Hot"];
var pictures = ["Assets/images/data.gif","Assets/images/min.gif","Assets/images/gameover.gif"];
//Assigns a Score//

var range;
	if (correct<1) {
		range = 2;
	}
	if (correct>0 && correct<3) {
		range = 1;
	}
	if (correct>2) {
		range = 0;
	}

	document.getElementById("after_submit").style.visibility = 'visible';
	document.getElementById("message").innerHTML = messages[range];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
	document.getElementById("picture").src = pictures[range];
}


  //Game Reset//
  document.getElementById('reset').onclick = function() {
 
  
    
    
   
  }