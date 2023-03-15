var timesPlayed = 0;
var wins = 0;
var losses = 0;
var ties = 0;
var rock = 0;
var paper = 0;
var scissors = 0;

/* This function gets the user's choice depending on which button was clicked, 
   then it calls another function to get the computer's choice which is then
   stored in the variable "computerChoice", after that a second function is called
   which determines the winner and the result is stored in the variable "result",
   and then finally a third function is called which takes the user's choice,
   the computer's choice, and the result and shows the overall results.*/
function play(userChoice) {
	var computerChoice = get_Computer_Choice();
	var result = determine_Winner(userChoice, computerChoice);
	show_Result(result, userChoice, computerChoice);
}

/* This function determines the computer's choice by randomly picking a number
   between 0 and 2 and then assigning that number to a variable named "randomIndex", 
   then the function returns the array "choices" with the chosen number.*/
function get_Computer_Choice() {
	var choices = ['rock', 'paper', 'scissors'];
	var randomIndex = Math.floor(Math.random() * 3);
	return choices[randomIndex];
}

/* This function determines the winner based on what the user and computer chose
   by using if-statements to compare the choices and then returning "win", "lost",
   or "tied". */
function determine_Winner(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return 'tie';
	} 
	else if (userChoice === 'rock' && computerChoice === 'scissors' || 
			   userChoice === 'paper' && computerChoice === 'rock' || 
			   userChoice === 'scissors' && computerChoice === 'paper') {
		return 'win';
	} 
	else {
		return 'lose';
	}
}

// This function is responible for printing out all the results of the game.
function show_Result(result, userChoice, computerChoice) {
	var resultText = '';
	var userIcon = '';
	var computerIcon = '';
  
	// These if-statements determine what icon to print out based on the user's choice.
	if (userChoice == 'rock') {
	  rock++;
	  userIcon = '<ion-icon name="ellipse-sharp"></ion-icon>';
	} 
	else if (userChoice == 'paper') {
	  paper++;
	  userIcon = '<ion-icon name="document-sharp"></ion-icon>';
	} 
	else {
	  scissors++;
	  userIcon = '<ion-icon name="cut-sharp"></ion-icon>';
	}
  
	// These if-statements determine what icon to print out based on the computer's choice.
	if (computerChoice == 'rock') {
	  computerIcon = '<ion-icon name="ellipse-sharp"></ion-icon>';
	} 
	else if (computerChoice == 'paper') {
	  computerIcon = '<ion-icon name="document-sharp"></ion-icon>';
	} 
	else {
	  computerIcon = '<ion-icon name="cut-sharp"></ion-icon>';
	}
  
	/* These if-statements print out text that states if the user won, tied, or lost.
	   They also increment the variables "ties", "wins", "losses" by 1 based on that,
	   in addition to incrementing the "timesPlayed" variable by 1 every time.*/
	if (result === 'tie') {
	  timesPlayed++;
	  ties++;
	  resultText = '<span style = color:gray>It\'s a tie!</span>';
	} 
	else if (result === 'win') {
	  timesPlayed++;
	  wins++;
	  resultText = '<span style = color:green>You win!</span>';
	} 
	else {
	  timesPlayed++;
	  losses++;
	  resultText = '<span style = color:red>You lose!</span>';
	}
  
	// This code updates the "result" element to show the outcome and statistics of the game.
	document.getElementById('result').innerHTML =
  '<p class = fadein1>' + resultText + '</p>' +
  '<p class = fadein1>You chose ' + userChoice + ' ' + userIcon + '.</p>' +
  '<p class = fadein1>The computer chose ' +  computerChoice + ' ' + computerIcon + '.</p>' +
  '<h3>Statistics <ion-icon name="stats-chart-outline"></ion-icon>: </h3>' +
  '<div id="result" class="bordered">' +
  '<h4 class = "timesplayed">Times Played: </h4> <p><span class= fadein2>' +
  timesPlayed + '</span>' + ' Times </p>' + '<h4> Results: </h4>' +
  '<p class = results><span style="color:green">Wins: </span>' + wins + ' ' +
  '<span style="color:red">Losses: </span>' + losses + ' '
  + '<span style = color:gray>Ties: </span>' + ties + '</p>' + '<h4>Choices: </h4>' +
  '<p class = choices>Rock <ion-icon name="ellipse-sharp"></ion-icon>:  ' + rock + ' ' +
  'Paper <ion-icon name="document-sharp"></ion-icon>:  ' + paper + ' ' +
  'Scissors <ion-icon name="cut-sharp"></ion-icon>:  ' + scissors + ' ' + '</p>' + '</div>';
  }
  
