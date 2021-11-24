var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var players, car1, car2;
var cars,fuelImg,coinImg,obImg,fuelg,coing,obg;

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track = loadImage("assets/track.jpg");
  fuelImg=loadImage("assets/fuel.png")
  coinImg=loadImage("assets/goldCoin.png")
  obImg=loadImage("assets/obstacle1.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.updateState(1);
  }

  if (gameState === 1) {
    game.play();
  }
}


