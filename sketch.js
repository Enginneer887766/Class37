var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var car1,car2,car3,car4,cars;


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //updates gamestate
  if (playerCount === 3) {
    game.update(1);
  
  }
  //game starts
  if (gameState === 1) {
    clear();
    game.play();
  }
}