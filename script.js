/* global createCanvas, getAudioContext, p5, ml5, background, textAlign, fill, textSize, text, CENTER, width, height,
abs, rect, stroke, strokeWeight, line, noStroke, key, userStartAudio, Scribble, rectMode, map, resume, springArt, summerArt, fallArt, winterArt
*/
let model_url =
  "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let audioContext;
let mic;
let pitch;
let freq = 0;
let season = "";
let newSong = true;
let foundSong = false;
let fallPositions = [];
let springPositions = [];
let firstTime = true;
let bg = true;
const range = 5;
let userStart; 
let userListen;
const findSeason = [
  { season: "Spring", freq: 262 },
  { season: "Summer", freq: 392 },
  { season: "Fall", freq: 880 },
  { season: "Winter", freq: 523 }
];

function preload(){
  userStart = loadImage('https://cdn.glitch.com/73535575-48f0-4fd4-9092-39c5d04ac7ff%2Fuser%20start%20screen%20very%20start.png?v=1596126212950');
  userListen = loadImage('https://cdn.glitch.com/73535575-48f0-4fd4-9092-39c5d04ac7ff%2Fuser%20listening%20screen.png?v=1596127560682');
}

function setup() {
  createCanvas(400, 400);
  image(userStart, 0, 0);
  createFallArray();
  createSpringArray ();
  
}

function keyPressed(){
  if (key === "S" || key === "s"){
    checkAudio();
    console.log ("audio started");
    firstTime = false;
    userStartAudio();
  }
}

function checkAudio() {
  image(userListen, 0, 0);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
} 

function draw() {
  if (firstTime){
    image(userStart, 0, 0);
  }
  if (newSong && freq != 0) {
    checkSong();
  }
  if (foundSong){
    drawSeason();
    createButtons();
  }
}

function createButtons(){
  //save button
  saveArtButton = createButton("Save Canvas"); 
  saveArtButton.position(305, 400); 
  saveArtButton.mousePressed(saveArt); 
  
  //back button
  backButton = createButton ("Back");
  backButton.position(0, 400);
  backButton.mousePressed(backToStart);
  
  //display season button
  seasonButton = createButton ("Season Detected: " + season);
  seasonButton.position (103, 400);
}

function backToStart(){
  bg = true;
  freq = 0;
  season = "";
  newSong = true;
  foundSong = false;
  fallPositions = [];
  springPositions = [];
  firstTime = true;
  bg = true;
  setup();
}

function drawSeason(){
  if (season === "Spring"){
        springArt(freq);
      } else if (season === "Summer") {
        summerArt (freq);
      } else if (season === "Winter"){
        winterArt (freq);
      }
      else {
        fallArt (freq);
      }
}

function checkSong() {
  for (let i = 0; i < findSeason.length; i++) {
    if (freq >= findSeason[i].freq - range &&
      freq <= findSeason[i].freq + range) {
      season = findSeason[i].season;
      newSong = false;
      foundSong = true;     
      console.log ("found song");
      return;
    }
  }
}

function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  console.log("model loaded");
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      fill(0);
      console.log ("frequency is " + frequency);
      freq = frequency;
    }
    getPitch();
  });
}

function createFallArray(){
  let y = 0;
  for (let x = 0; x <= 420; x += 30){
    if (x === 0 || x % 60 === 0){
      y = 0;
    } else {
      y = 45;
    }
    for (let i = 0; i <= 400; i += 90){
      fallPositions.push({
        x: x,
        y: y,
      });
      y += 90;
    }
  }
  console.log(fallPositions.length);
}

function createSpringArray(){
  let y = 0;
  for (let x = 0; x < 400; x += 50){
    for (let i = 0; i < 400; i += 50){
      springPositions.push({
        x: x,
        y: y,
      });
      y+=50;
    }
    y=0;
  }
}

function saveArt() { 
  save(season + "_canvas.png"); 
} 