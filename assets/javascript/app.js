$(document).ready(function() {

// Function to create initial start screen and start button
function initialScreen() {
	startScreen = "<p class='text-center main-button-container'> <a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start this pretty good quiz</a></p>";
	$(".mainArea").html(startScreen);
}

initialScreen();

//generateHTML() is triggered by clicking the start button

$("body").on("click", ".start-button", function(event){
	
	generateHTML();

	timerWrapper();
}); 

$("body").on("click", ".answer", function(event){
	
	userAnswer = $(this).text(); 
	if(userAnswer === correctAnswers[questionCounter]) { //if user clicks the correct answer, display correct answer screen

		clearInterval(countdownTimer);
		correctScreen();
	}
	else {
		clearInterval(countdownTimer);
		wrongScreen();
	}
}); 

$("body").on("click", ".reset-button", function(event){
	resetGame();
}); 

});  

// function to increase unanswered question count if user does not answer before the countdown ends
function timeoutScreen() {

	noAnswerTally++;
	gameHTML = "<p class='text-center timer-p'>Time left: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You're a victim of circumstance.  Time's up.  The answer was " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/SadLarry.jpg'>";
	$(".mainArea").html(gameHTML); // generate the above timeout text
	setTimeout(wait, 3000);  // wait three seconds until the next question is displayed
}


function correctScreen() {

	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time left: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Prettyyy prettaayy PRETTAAAY GOOD! The answer was " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000);  
}


function wrongScreen() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time left: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Ok, you know what? Get the f*ck out of my house, Larry. The correct answer was "+ correctAnswers[questionCounter] + ".</p>" + "<img class='center-block img-wrong' src='assets/images/SadLarry.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 3000); 
}



function generateHTML() {

	gameHTML = "<p class='text-center timer-p'>Time left: <span class='timer'>20</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";

	$(".mainArea").html(gameHTML);
}



function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 20;
	timerWrapper();
	}
	else { //when you arrive at the final question, display the end screen
		endScreen();
	}
}



function timerWrapper() {
	countdownTimer = setInterval(twentySec, 1000);
	function twentySec() {
		if (counter === 0) {
			clearInterval(countdownTimer);
			timeoutScreen();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}


function endScreen() {

	gameHTML = "<p class='text-center timer-p'>Time left: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Here are your results!" + "</p>" + "<p class='summary-correct'>Correct answers: " + correctTally + "</p>" + "<p>Wrong answers: " + incorrectTally + "</p>" + "<p>Unanswered questions: " + noAnswerTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Do better this time!</a></p>";

	$(".mainArea").html(gameHTML);
}



function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	noAnswerTally = 0;
	counter = 20;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 20;
var questionArray = ["On the 'Opening Night' episode in season 4, Larry finds a lost watch and then loses it again.  Whose watch was it?", "What is the name of Jeff and Susie's daughter?", "In season 3, episode 8, what distracting activity is Larry preoccupied with during Wanda Sykes' engagement party?", "In season 2, episode 8, what basketball player does Larry accidentally trip and injure?", "In the 'Korean Bookie' episode, Larry is convinced that the bookie has cooked and served Jeff's pet.  What type of animal was it?", "In season 9, episode 3, what does Larry do to anger a cop and land himself in court?", "In season 2, Larry starts to feel reluctant about going back to his therapist.  Why?", "In 'Foisted', season 9, it is revealed that which talk show host 'foisted' their assistant, who takes two unplanned days off due to constipation, onto Larry?"];
var answerArray = [["Susie Greene", "Mel Brooks", "David Schwimmer", "Cheryl David"], ["Tammy","Sammy","Stephanie","Cheryl"], ["Popping bubble wrap", "Rapping poorly", "Cracking his knuckles", "Yodeling"], ["Kobe Bryant", "Shaquille O'Neal", "Michael Jordan", "Dennis Rodman"], ["Dog", "Cat", "Parrot", "Guinea pig"], ["Rear-end his police car", "Yell at him that the light turned green", "Talk to Jeff on his cell phone about his fear of the Ayatollah", "Honk at the cop because the light turned green"], ["He wants to date Cheryl now that she and Larry broke up", "Larry sees him in a thong at the beach", "Larry thinks the patients' armchair is uncomfortable", "Larry thinks the therapist's outfits suck"], ["Stephen Colbert", "Conan O'Brien", "David Letterman", "Jimmy Kimmel"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Larry1.gif'>", "<img class='center-block img-right' src='assets/images/Larry2.jpg'>", "<img class='center-block img-right' src='assets/images/Larry3.jpg'>", "<img class='center-block img-right' src='assets/images/Larry4.jpg'>", "<img class='center-block img-right' src='assets/images/Larry5.jpg'>", "<img class='center-block img-right' src='assets/images/Larry6.jpg'>", "<img class='center-block img-right' src='assets/images/Larry7.jpg'>", "<img class='center-block img-right' src='assets/images/Larry8.jpg'>"];
var correctAnswers = ["C. David Schwimmer", "B. Sammy", "A. Popping bubble wrap", "B. Shaquille O'Neal", "A. Dog", "D. Honk at the cop because the light turned green", "B. Larry sees him in a thong at the beach", "D. Jimmy Kimmel"];
var questionCounter = 0;
var userAnswer;
var countdownTimer;
var correctTally = 0;
var incorrectTally = 0;
var noAnswerTally = 0;
