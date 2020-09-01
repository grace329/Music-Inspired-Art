function springArt(freq){
  push();
  frameRate(2);
  let min, max;
  colorMode(HSL, 360, 100, 100);
  let squares;
  if (season == 'Spring') {
    if (bg){
      fill("white");
      noStroke();
      rect(0, 0, width, height)
      bg = false;
    }
    squares = new SpringSquare ();
    if (squares.min != -1 && squares.max!= -1){
      squares.drawSquare();
    }
  }
  pop();
}


class SpringSquare {
  constructor (){
    if (freq <= 262 + range && freq >= 262-range) { // c
      this.min = 170;
      this.max = 190;
    } else if (freq <= 294 + range && freq >= 294-range) { //d
      this.min = 190;
      this.max = 210;
    } else if (freq <= 330 + range && freq >= 330-range) { //e
      this.min = 210; 
      this.max = 230;
    } else if (freq <= 349 + range && freq >= 349-range) { //f
      this.min = 230;
      this.max = 260;
    } else if (freq <= 392 + range && freq >= 392-range) { //g
      this.min = 260;
      this.max = 280;  
    } else if (freq <= 440 + range && freq >= 440-range) { //a
      this.min = 280; 
      this.max = 290;
    } else{
      this.min = -1;
      this.max = -1;
    }
  }
  
  drawSquare(){
    let i = floor(random (0, springPositions.length - 1));
    let l = random (70, 90);
    let h = random (this.min, this.max); 
    let size = 50;
    stroke ("black")
    strokeWeight(0.5)
    fill (color(h, random (70, 100), l));
    rect (springPositions[i].x, springPositions[i].y, size, size);
    fill (color(h, random (70, 100), l-40));
    rightTri (springPositions[i].x + 25, springPositions[i].y + 30, 30, 0.5);
    springPositions.splice(i, 1);
  }
  
}