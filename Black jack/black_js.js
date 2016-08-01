var cards = [
    ["images/TC.png", 1], ["images/2C.png", 2], ["images/3C.png", 3], ["images/4C.png", 4], ["images/5C.png", 5],
    ["images/6C.png", 6], ["images/7C.png", 7], ["images/8C.png", 8], ["images/9C.png", 9], ["images/10C.png", 10],
    ["images/JC.png", 10], ["images/QC.png", 10], ["images/KC.png", 10],
    ["images/TB.png", 1], ["images/2B.png", 2], ["images/3B.png", 3], ["images/4B.png", 4], ["images/5B.png", 5],
    ["images/6B.png", 6], ["images/7B.png", 7], ["images/8B.png", 8], ["images/9B.png", 9], ["images/10B.png", 10],
    ["images/JB.png", 10], ["images/QB.png", 10], ["images/KB.png", 10],
    ["images/TH.png", 1], ["images/2H.png", 2], ["images/3H.png", 3], ["images/4H.png", 4], ["images/5H.png", 5],
    ["images/6H.png", 6], ["images/7H.png", 7], ["images/8H.png", 8], ["images/9H.png", 9], ["images/10H.png", 10],
    ["images/JH.png", 10], ["images/QH.png", 10], ["images/KH.png", 10],
    ["images/TP.png", 1], ["images/2P.png", 2], ["images/3P.png", 3], ["images/4P.png", 4], ["images/5P.png", 5],
    ["images/6P.png", 6], ["images/7P.png", 7], ["images/8P.png", 8], ["images/9P.png", 9], ["images/10P.png", 10],
    ["images/JP.png", 10], ["images/QP.png", 10], ["images/KP.png", 10]
];
var newCards = cards.slice();

var user = [];
var comp = [];
var userCardOne = document.getElementById('card');
var userCardTwo = document.getElementById('card2');
var userCardsix = document.getElementById('card6');
var userCardSeven = document.getElementById('card7');

var botAddPoints = document.getElementById('botPoints');
var userAddPoints = document.getElementById('points');
var nextCard = document.getElementById('add_card');
var openCards = document.getElementById('open_cards');
var playMore = document.getElementById('more');
var us = document.getElementById('user_cards');
var us1 = document.getElementById('bot_cards');

var bWin = document.getElementById('bWin');
var yWin = document.getElementById('yWin');
var draw = document.getElementById('second');


var minCards = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/*for (var i=0; i<4; i++){
 var randomNumer = getRandomInt(minCards,maxCards);
 user.push(cards[randomNumer]);

 console.log(randomNumer);

 console.log(cards[randomNumer]);
 console.log(user);
 }*/
function userPoints() {
    console.log(cards.length);
    for (var i = 0; i < 2; i++) {
        var randomNumer = getRandomInt(minCards, cards.length - 1);

        user.push(cards[randomNumer]);
        cards.splice(randomNumer,1);

    }
    userCardsix.src = user[0][0];
    userCardSeven.src = user[1][0];
}
function startDeck() {

    return userAddPoints.innerHTML = +user[0][1] + +user[1][1];

}

userPoints();
startDeck();

userCardOne.src = "images/shirt.png";
userCardTwo.src = "images/shirt.png";


nextCard.addEventListener('click', function (event) {

    var randomNumer = getRandomInt(minCards, cards.length - 1);
    console.log(randomNumer);
console.log(cards[randomNumer]);
    user.push(cards[randomNumer]);
    cards.splice(randomNumer, 1);
console.log(cards.length);
    userAddPoints.innerHTML = +userAddPoints.innerHTML + user[user.length - 1][1];

    var picture = document.createElement('img');
    picture.src = user[user.length - 1][0];
    us.appendChild(picture);
});


/*function botPoints() {
 for (var i = 0; i < 2; i++) {
 var randomNumer = getRandomInt(minCards, maxCards);
 comp.push(cards[randomNumer]);
 }
 userCardOne.src = comp[0][0];
 userCardTwo.src = comp[1][0];
 }

 function startDeckBot() {
 console.log(comp);
 return  botAddPoints.innerHTML = +comp[0][1] + +comp[1][1];

 }*/

function saa() {
    userCardOne.style.display = 'none';
    userCardTwo.style.display = 'none';
    for (var i = 0; i < 10; i++) {
        if (botAddPoints.innerHTML < 18) {
            var randomNumer = getRandomInt(minCards, cards.length - 1);

            comp.push(cards[randomNumer]);
            cards.splice(randomNumer, 1);

            var picture1 = document.createElement('img');
            picture1.src = comp[i][0];
            us1.appendChild(picture1);
            botAddPoints.innerHTML = +botAddPoints.innerHTML + Number(comp[i][1]);
        } else {
            return
        }
    }
}

function whoWin(user, bot) {
    /*console.log(userAddPoints.innerHTML);
     console.log(botAddPoints.innerHTML);*/
    if (user == bot || user > 21 && bot > 21) {
        return draw.style.display = 'block';

    } else if ((bot > 21 || user > bot) && user <= 21) {
        return yWin.style.display = 'block';

    } else if ((user > 21 || bot > user) && bot <= 21) {
        return bWin.style.display = 'block';

    }
}


function removeChildren(node) {
    var children = node.children;

    while (children.length - 2) {
        node.removeChild(children[2])
    }
}


function refreshBot() {

    botAddPoints.innerHTML = '';

    removeChildren(us1);

    userCardOne.style.display = 'inline-block';
    userCardTwo.style.display = 'inline-block';

    comp = [];

    bWin.style.display = 'none';

   return cards = newCards.slice();
}

function refreshUser() {
    userAddPoints.innerHTML = '';
    removeChildren(us);
    yWin.style.display = 'none';
    user = [];

    userPoints();
    startDeck();

}

openCards.addEventListener("click", function () {

    // botPoints();
    // startDeckBot();
    saa();
    openCards.disabled = true;
    nextCard.disabled = true;
    setTimeout(function () {
        whoWin(userAddPoints.innerHTML, botAddPoints.innerHTML)
    }, 500)

});

playMore.addEventListener('click', function (event) {
    refreshBot();
    refreshUser();
    openCards.disabled = false;
    nextCard.disabled = false;
    draw.style.display = 'none';

});


