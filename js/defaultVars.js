const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif"

let arrObstacles = [];
let obstacleImages = ["../images/bomb.png","../images/light.png","../images/coin.png" ];

const background = "../images/bg.png";

let speed = 1;

let points = 0;

let levelHard = 1;
let requestId;
let frames = 0;

const audio = new Audio()
audio.src = "../audio/song.mp3";
audio.volume = 0.01;

const songWin = new Audio()
songWin.src = "../audio/songwin.mp3";
songWin.volume = 0.1;

