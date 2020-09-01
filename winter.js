
function winterArt(freq) {
  push();
  frameRate(3);
  colorMode(HSL, 360, 100, 100);
  //text("WINTER", 20, 20);
  let myRect;
  if (season == "Winter") {
    if (bg){
      fill("white");
      noStroke();
      rect(0, 0, width, height)
      bg = false;
    }
    myRect = new WinterRect();
    if (myRect.direction === "vert") {
      myRect.drawRectVert();
    } else {
      myRect.drawRectHorz();
    }
  }
  pop();
}

class WinterRect {
  constructor() {
    //horizontal or vertical
    if (floor(freq) % 2 == 0) {
      this.direction = "horz";
    } else {
      this.direction = "vert";
    }

    //HSL values
    this.c = random(162, 244);
    this.s = random(60, 100);
    this.l = 70;

    //number of parts/thickness based on freq
    //middle G
    if (freq <= 392 + range && freq >= 392 - range) {
      this.numParts = 1;
      //middle B
    } else if (freq <= 494 + range && freq >= 494 - range) {
      this.numParts = 2;
      //high C
    } else if (freq <= 523 + range && freq >= 523 - range) {
      this.numParts = 3;
      //high D
    } else if (freq <= 587 + range && freq >= 587 - range) {
      this.numParts = 3;
      //high E
    } else if (freq <= 659 + range && freq >= 659 - range) {
      this.numParts = 4;
      //high F
    } else if (freq <= 698 + range && freq >= 698 - range) {
      this.numParts = 4;
      //high G
    } else if (freq <= 784 + range && freq >= 784 - range) {
      this.numParts = 5;
      //high A
    } else if (freq <= 880 + range && freq >= 880 - range) {
      this.numParts = 5;
      //high B
    } else if (freq <= 988 + range && freq >= 988 - range) {
      this.numParts = 6;
    } else {
      this.numParts = 0;
    }
  }

  drawRectVert() {
    let w1 = random(width - 30);
    let w2 = random(width - 30);
    for (let i = 0; i < this.numParts; i++) {
      for (let j = 0; j < 8; j++) {
        stroke(this.c, this.s, this.l);
        line(w1, 0, w2, height);
        w1++;
        w2++;
      }
      this.l += 5;
    }
  }

  drawRectHorz() {
    let h1 = random(height - 30);
    let h2 = random(height - 30);
    for (let i = 0; i < this.numParts; i++) {
      for (let j = 0; j < 10; j++) {
        stroke(this.c, this.s, this.l);
        line(0, h1, width, h2);
        h1++;
        h2++;
      }
      this.l += 5;
    }
  }
}
