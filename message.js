var message = ["The Way To Get Started Is To Quit Talking And Begin Doing. – Walt Disney",
"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. – Winston Churchill",
"Don’t Let Yesterday Take Up Too Much Of Today. – Will Rogers", "That proves you are unusual",
 "But that was life: Nobody got a guided tour to their own theme park.",
"But that was life: Nobody got a guided tour to their own theme park.", 
"I'm about as intimidating as a butterfly.",
"The lampshade on my head is for my bright ideas."];

function shufflemessage() {
    for (var i = 0; i < message.length; i++) {
      var j = Math.floor(Math.random() * i);
      var temp = message[i];
      message[i] = message[j];
      message[j] = temp;
    }
    return message[0];
}
var randomText = shufflemessage();

module.exports = {randomText};