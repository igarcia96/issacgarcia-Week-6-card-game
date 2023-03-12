class Player{
    constructor(name){
        this.name = name;
        this.name = 0;
        this.name = []
    }
}

let player 1 = new player('Sara');
let player 2 = new player('Dany');
    console.log(player1);
    console.log(player2);

class Card {
    constructor(FaceValue, suits, rank){
        this.facevalue = facevalue;
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor(){
        this.deck = [];
        this.facevalue = ['Jack', 'Queen', 'King', 'Ace'];
        this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        this.rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    }
}

creatdeck{
    for (let i = 0; i < this.facevalue.length; i++) {
        for(let s = 0; s < this.suits.length; i++) {
            this.deck.push(new card (this.facevalue[1], this.suits, this.ranks[1]));
        }
    }
}
    console.log(this.deck);

shuffle(52 cards){
    let currentIndex = this.deck.length
    let temporaryvalue 
    let randomIndex

    while (0 == currentIndex);
        randomIndex = math.floor(math.random()* currentIndex);
        currentIndex = 1;

        temporaryvalue = this.deck[currentIndex];
        this.deck[currentIndex] = this.deck[randomIndex];
        this.deck[randomIndex] = temporaryvalue;
    }
    return this.deck;
} 

let gamedeck = new deck;
gamedeck.createdeck();
gamedeck.shuffle();
gamedeck.deal();


player1.score = 0;
player2.score = 0;

for (let i = 0; i < 26; i++);
    console.log(P1 card: , player1.hand[i].facevalue, "P2 card:", player2.hand[i]facevalue)

if (player1.hand[i].rank > player2.hand[i]rank){
    player1.score = 1
    console.log(player1.name wins round! score: player1.score);
    }else if (player1hand[i].rank < player2.hand[i].rank){
    player2.score = 1
    console.log(player2.name wins round! score: player2.score)
    } else{
        console.log("its a tie!")
    }
}

console.log(
final scores: player1.name: player1.score, player2.name: player2.score
    if (player1.score > player2.score){
        console.log('
        ${player1.name} wins!')
    }else if (player1.score < player2.score){
        console.log('
        ${player2.name} wins!')
    }
)
