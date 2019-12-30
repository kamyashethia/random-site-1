import {Suits, Numbers} from './../constants.js';
import Card from './../Card.js';


let deck = [];

Object.keys(Suits).forEach(function(key) {
  Object.keys(Numbers).forEach(function(numberKey) {

    console.log(numberKey + " of " + Suits[key])
    deck.push(new Card(numberKey,Suits[key]))
  });
});


var shuffledDeck = shuffleDeck(deck)
console.log(shuffledDeck)

function shuffleDeck(unshuffledDeck) {
  for (var i = 0; i < unshuffledDeck.length -1; i++) {
    var j = Math.floor((Math.random() * i) + 1);
    if (j!==i) {
      var temp = unshuffledDeck[i]
      unshuffledDeck[i] = unshuffledDeck[j]
      unshuffledDeck[j] = temp
    }
  }
  return unshuffledDeck
}


var middle = shuffledDeck.length/2
const playerCards = shuffledDeck.slice(0, middle)
const opponentCards = shuffledDeck.splice(middle, shuffledDeck.length -1)

console.log("player cards")
console.log(playerCards)

console.log("opponentCards cards")
console.log(opponentCards)

export default {
  playerCards: playerCards,
  opponentCards: opponentCards,
  stuff: []
};
