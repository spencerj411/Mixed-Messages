// list of restaurants
var restaurants = [
	"McDonalds",
	"KFC",
	"Subway",
	"Oporto",
	"Ba Co"
];

// randomly chooses index between 0 and size of array (inclusive)
function randomSelect(messages) {
	return messages[Math.floor(Math.random() * messages.length)];
}

console.log(randomSelect(restaurants));
