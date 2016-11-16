var program = require('commander');

var book1_title = "The Complete Maus";
var book1_author = "Art Spiegelman";
var book1_price = 26.99;
var book1_kind = "paperback"

var book2_title = "Lord of the Flies";
var book2_author = "William Golding";
var book2_price = 10.99;
var book2_kind = "trade paperback"

var book3_title = "Just Kids";
var book3_author = "Patti Smith";
var book3_price = 15.99;
var book3_kind = "trade paperback"

var book4_title = "The Zombie Survival Guide";
var book4_author = "Max Brooks";
var book4_price = 15.99;
var book4_kind = "trade paperback"

var book5_title = "A Little Life";
var book5_author = "Hanya Yanagihara";
var book5_price = 13.99;
var book5_kind = "paperback"
 
program
  .version('0.0.1')
  .option('-t, --title [value]', 'title of the book', 'empty')
  .option('-a, --author [value]', 'author of the book')
  .option('-p, --price [value]', 'price of the book')
  .option('-k, --kind [value]', 'kind of the book')
  .parse(process.argv);

console.log(program.title);

switch(program.title)
{
	case book1_title:
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_title:
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_title:
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_title:
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_title:
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	case "empty":
		break;
	default:
		console.log('No match...');
		break;
}
switch(program.author)
{
	case book1_author:
		console.log(book1_title);
		console.log(book1_author);
		console.log(book1_price);
		console.log(book1_kind);
		break;
	case book2_author:
		console.log(book2_title);
		console.log(book2_author);
		console.log(book2_price);
		console.log(book2_kind);
		break;
	case book3_author:
		console.log(book3_title);
		console.log(book3_author);
		console.log(book3_price);
		console.log(book3_kind);
		break;
	case book4_author:
		console.log(book4_title);
		console.log(book4_author);
		console.log(book4_price);
		console.log(book4_kind);
		break;
	case book5_author:
		console.log(book5_title);
		console.log(book5_author);
		console.log(book5_price);
		console.log(book5_kind);
		break;
	default:
		console.log('No match...');
		break;
}
