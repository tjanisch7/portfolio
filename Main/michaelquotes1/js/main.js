// quotes and images array
var quotes = [
	{
		quote: "Would I rather be feared or loved? Both, I want people to fear how much the love me.",
		image: "img/michael4.jpg", 
		index: 0
	},
	{
		quote: "Sometimes i'll start a sentence and I don't even know where it's going. I just hope I find it along the way.",
		image: "img/michael1.jpg", 
		index: 1
	},
	{
		quote: "I am Beyonce, always.",
		image: "img/michael8.jpg",
		index: 2
	},
	{
		quote: "I knew exactly what to do. But in a much more real sense, I had no idea what to do.",
		image: "img/michael3.png",
		index: 3
	},
	{
		quote: "I am running away from my responsibilities, and it feels good.",
		image: "img/michael5.jpg",
		index: 4
	},
	{
		quote: "I'm an early bird and a night owl. So i'm wise, and I have worms.",
		image: "img/michael6.jpg",
		index: 5
	},
	{
		quote: "You know what they say. Fool me once, strike one. But Fool me twice, strike three.",
		image: "img/michael2.jpg",
		index: 6
	},
	{
		quote: "Make friends first, make sales second, and make love third. In no particular order.",
		image: "img/michael9.png",
		index: 7
	},
	{
		quote: "I'm not superstitious, but I am a little stitious.",
		image: "img/michael7.jpg",
		index: 8
	}
];

// function that shows a random quote on the page 
var getRandomQuote = function(){
	// random integer of array
	var randomInt = Math.floor(Math.random() * quotes.length);
	// quote index
	var quoteObject = quotes[randomInt];
	// quote object within Quotes array
	return quoteObject;
}

// display each quote once before showing a quote for the second time
var usedQuotes = [];
var quoteTracker = function() {
	// get random quote
	var quoteObject = getRandomQuote();
	// if quote index has already been used, get a different index
	if (usedQuotes.indexOf(quoteObject.index) > -1) {
		// clear the usedQuotes array if they have all been used once
		if (usedQuotes.length === quotes.length){
			usedQuotes = [];
		}
		return quoteObject = quoteTracker();
	//otherwise push the index used into the usedQuotes array and return the quote object 
	} else {
		usedQuotes.push(quoteObject.index);
		return quoteObject;
	}
}

// print quote onto screen
var printQuote = function() {
	var newQuote = quoteTracker();
	// add the HTML to the page
	document.getElementById('quote-image').src = newQuote.image;
	document.getElementById('quote-text').textContent = newQuote.quote;
}

// event listener to respond when user clicks on button
// when user clicks on the button, printQuote function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 














