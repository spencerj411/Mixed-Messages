var restaurants = [
	"McDonalds",
	"KFC",
	"Subway",
	"Oporto",
	"Ba Co"
];


function randomSelect(messages) {
	return messages[Math.floor(Math.random() * messages.length)];
}

console.log(randomSelect(restaurants));
