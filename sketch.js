//create the characters
//background
//creating the data structure - two players, creating a round field which tracks what rounds the players are in
//create the weapons
//making them move/jump
//when ever weapons touch the other character, they lose health points
//Both health points will start at 100 and each hit will say be 10 or 15
//whoever hits 0 first is the loser and the other player wins

var database;
var playerCount, gameState = 0, player;
var game, form, allPlayers;
var c1Img,c1Img2,c1Img3,c1Img4;
var c2Img,c2Img2,c2Img3, backImage;
var character1,character2,characters;

function preload(){
  backImage = loadImage("background.jpg");
  c1Img = loadImage("C1Img.png");
  c1Img2 = loadImage("C1Img2.png");
  c1Img3 = loadImage("C1Img3.png");
  c1Img4 = loadImage("C1Img4.png");
  c2Img = loadImage("C2Img.jpg");
  c2Img2 = loadImage("C2Img2.jpg");
  c2Img3 = loadImage("C2Img3.jpg");
}

function setup() {
  database = firebase.database();
  game = new Game();
  game.readGameState();

  createCanvas(800,400);
  game.start();

}

function draw() {
  background(backImage);

  console.log(playerCount);
  if (playerCount===2){
    game.updateGameState(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
}