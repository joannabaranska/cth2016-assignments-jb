// blade.js

/*	
	file: 		blade.js
	desc: 		This assignment is inspired by Alan Turing's Imitation Game 
				and Joseph Weizenbaum's ELIZA. We have based our assignment on 
				Ridley Scott's movie Blade Runner from 1982, when they check if 
				someone is an android or not.
				http://www.allthetests.com/quiz30/quiz/1386100782/Voight-Kampff-test-questions
	author: 	Cecilie Wig and Joanna Baranska
	date: 		21/11/2016
*/


// import express ()
var express = require('express');			// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);		// npm install --save socket.io

// import chance (http://chanchejs.com)
var chance = require('chance').Chance(); 	// npm install --save chance

	/* ========================
		Answers & Responses
	======================== */

// the five patterns which the script looks for when receiving a message from a human

var pattern_1 = ['Someone gives you a calfskin wallet'];

var pattern_2 = ['You realize there is a wasp on your arm'];

var pattern_3 = ['Describe your mother'];

var pattern_4 = ['You become pregnant by a man who runs off with your best friend'];

var pattern_5 = ['How many answers were given by machines'];

function matches(msg, array_of_patterns) {
	var msg_lower = msg.toLowerCase();
	for(var i = 0; i < array_of_patterns.length; i++) {
		var pattern_lower = array_of_patterns[i].toLowerCase();
		if(msg_lower.search(pattern_lower) > -1) {
			return true;
		}
	}
	return false;
}

/**
*	Picks a random element from an array
*	@param {Array} array
* 	@return {Object} choice
*/

function choice(array) {
		var index = chance.natural({'min': 0, 'max': array.length - 1});
		return array [index];

}

/**
* Constructs a single randomly generate answer
* @return {String} 
*/

function answer_pattern_1() {
	switch(choice([1, 2, 3]))
	{
		case 1:
			return "Thank you for the wallet.";
		case 2:
			return "I wouldn't accept it.";
		case 3:
			return "I would appreciate it.";
	}
}

function answer_pattern_2() {
	switch(choice([1, 2, 3]))
	{
		case 1:
			return "I scream, and grab the closest thing near me - which happens to be a can of sunscreen - and beat the hell out of it.";
		case 2:
			return "I swap it away.";
		case 3:
			return "I kill it.";
	}
}

function answer_pattern_3() {
	switch(choice([1, 2, 3]))
	{
		case 1:
			return "Music. Love. Summer. Sun. Books. Movies. Friends. Laugther.";
		case 2:
			return "Warm voice, cookies.";
		case 3:
			return "My mother... I will tell you about my mother."
	}
}

function answer_pattern_4() {
	switch(choice([1, 2, 3]))
	{
		case 1:
			return "Ok, I think there is a first time for everything.";
		case 2:
			return "What do you think I do with my boyfriend?";
		case 3:
			return "I would never do an abortion."
	}
}

function answer_pattern_5() {
	switch(choice([1, 2, 3]))
	{
		case 1:
			return "2.";
		case 2:
			return "3.";
		case 3:
			return "1."
	}
}

function answer(msg) {

	if(matches(msg, pattern_1)) {

		return answer_pattern_1();

	} else if(matches(msg, pattern_2)) {

		return answer_pattern_2();

	} else if(matches(msg, pattern_3)) {

		return answer_pattern_3();

	} else if(matches(msg, pattern_4)) {

		return answer_pattern_4();

	} else if(matches(msg, pattern_5)) {

		return answer_pattern_5();

	} else {
		return "Sorry, I did not understand that because I am an android...";

	}
}

	/* ====================================
		Server and Socket Configuration
	==================================== */

// tell express to server our index.html file
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection
io.on('connection', function(socket) {

	console.log('got a connection');
	// io.emit('message from robot', 'Hey! My name is Deckard!'); // greetings

// (2) configure the connected socket to receive custon messages ('message from human')
socket.on('message from human', function(msg) {

	console.log('got a human message: ' + msg);
	// io.emit('message from robot', msg);

	var response = answer(msg);

	io.emit('message from android', response);

});

socket.on('disconnect', function() {

	console.log('got a disconnection');

	});

});

	/* =====================
		Start the server
	===================== */

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('listening on port: ' + 8088);

});