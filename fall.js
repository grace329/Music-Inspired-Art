function fallArt(freq){
  push();
  frameRate(3);
  let min, max;
  colorMode(HSL, 360, 100, 100);
  //text("FALL", 20, 20);
  let myHex;
  if (season == 'Fall') {
    if (bg){
      fill("white");
      noStroke();
      rect(0, 0, width, height)
      bg = false;
    }
    myHex = new FallHexagon ();
    if (myHex.min != -1 && myHex.max!= -1){
      myHex.drawHex();
    }
  }
  pop();
}


class FallHexagon {
  constructor (){
    if (freq <= 875 + range && freq >= 875-range) { //high A
      this.min = 1;
      this.max = 4;
    } else if (freq <= 928 + range && freq >= 928-range) { //high Bflat
      this.min = 52;
      this.max = 62;
    } else if (freq <= 435 + range && freq >= 435-range) { //low A
      this.min = 23; //23
      this.max = 35;
    } else if (freq <= 463 + range && freq >= 463-range) { //low Bflat
      this.min = 120; //120
      this.max = 135;//130
    } else if (freq <= 585 + range && freq >= 585-range) { //low Bflat
      this.min = 82;
      this.max = 95;  
    } else if (freq <= 780 + range && freq >= 780-range) { //high G
      this.min = 325; //325
      this.max = 339;//339
    } else if (freq <= 695 + range && freq >= 695-range) { //high G
      this.min = 325; //325
      this.max = 339;//339
    } else{
      this.min = -1;
      this.max = -1;
    }
  }
  
  drawHex(){
    let i = floor(random (0, fallPositions.length - 1));
    let l = random (50, 70);
    let h = random (this.min, this.max); 
    //let h = random (0, 90); //56
    fill (color(h, random (90, 100), l));
    hexagon (fallPositions[i].x, fallPositions[i].y, 30, 0);
    fill (color(h, random (90, 100), random (l + 5, 80)));
    hexagon (fallPositions[i].x, fallPositions[i].y, 15, 0);
    fallPositions.splice(i, 1);
    //console.log(fallPositions.length);
  }
  
}