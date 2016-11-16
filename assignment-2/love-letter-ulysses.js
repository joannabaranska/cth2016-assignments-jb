/*file: 	love-letters.js
	description: script helps to construct simple love letters
				 containing phrases from james joyce's 'ulysses'	
	author: joanna baranska
	date: 	14/11/16



*/

var chance = require('chance').Chance();

var wrap = require('word-wrap');

const determiner = ['THE', 'MY', 'YOUR'];

const adjective = ['ENDLESS', 'BOUNDLESS', 'CONSTANT', 'ETERNAL', 'INFINITE', 'UNBROKEN', 'PERPETUAL'];

const noun = ['LOVE', 'EMOTION', 'AFFECTION', 'PASSION', 'FONDNESS', 'TENDERNESS', 'YEARNING', 'FEELING', 'CLOSENESS', 'SENTIMENT', 'ADORATION', 'LIKING'];

const adverb = ['AFFECTIONATELY', 'STRONGLY', 'TENDERLY', 'DEVOTEDLY', 'FONDLY'];

const verb = ['RESEMBLES', 'MIRRORS', 'LOOKS LIKE', 'REMINDS OF', 'RECALLS'];

const determiner2 = ['THE'];

const ulysses = ['FLOWER OF THE MOUNTAIN', 'BLACK ADIAPHANE', 'SOLID SOUND', 'DREAM OF LOVE', 'A DARKNESS SHINING IN BRIGHTNESS', 'LIVID SEA', 'LONGLASHED EYES', 'UNCOUTH STAR', 'HARPSICHORDING BIRDS'];

function choice(array) {
	var index = chance.natural({'min': 0, 'max': array.length - 1});
	return array[index]; }

function maybe(array) {
	if( chance.bool() ) {
		return choice(array);
	} else {
		return '';
	}
}

/*
function short() {
	return choice(adjective) + ' ' + choice(noun);
}
*/


function long() {
	return  choice(determiner) + ' ' + choice(adjective) + ' ' +
			choice(noun) + ' ' + choice(adverb) + ' ' + choice (verb) 
			+ ' ' + choice(determiner2) + ' ' + choice(ulysses) + '. ';
				}

console.log('DEAR MOLLY' + '\n\n\n\n');

var text = '';

for(var i = 0; i < 5; i++) {
	text += long();
							}


console.log(wrap(text, {'width': 80}));
console.log('LOVE LEOPOLD' + '\n\n\n\n');
