function summerArt(freq){
  colorMode (HSB, 360, 100, 100);
  frameRate (1)
  if (season == 'Summer') {
    if (bg){
      fill("white");
      noStroke();
      rect(0, 0, width, height)
      bg = false;
    }
    // Any D
    if ((freq <= 1175 + range && freq >= 1175- range) || 
        (freq <= 587 + range && freq >= 587- range) || (
        freq <= 294 + range && freq >= 294- range) ){
        regularTriangle ();
    }
    // Any C
    if ((freq <= 1047 + range && freq >= 1047- range) || 
        (freq <= 523 + range && freq >= 523- range) || (
        freq <= 262 + range && freq >= 262- range) ){
        squares ();
    }
    // Any Bb
    if ((freq <= 932 + range && freq >= 932- range) || 
        (freq <= 466 + range && freq >= 466- range)){
           circles ();
    }
    // Any A
    if ((freq <= 880 + range && freq >= 880- range) || 
        (freq <= 440 + range && freq >= 440- range)) {
        regularTriangleColor ();
    }
    
    
    //Any G above middle C and high F#
    if ((freq <= 783 + range && freq >= 783- range) || 
        (freq <= 392 + range && freq >= 392- range) || (
        freq <= 740 + range && freq >= 740- range) ){
      longRectColour ();
      
    }
    // Any F above middle C and lower F#
    if ((freq <= 698 + range && freq >= 698- range) || 
        (freq <= 349 + range && freq >= 349- range) || (
        freq <= 369 + range && freq >= 369- range) ){
        rightTriangle ();
    }
    // Any E
    if ((freq <= 659 + range && freq >= 659- range) || 
        (freq <= 330 + range && freq >= 330- range)) {
           rectangles ();

    }
    // Any Eb
    if ((freq <= 622 + range && freq >= 622- range) || 
        (freq <= 311 + range && freq >= 311- range)) {
         regularTriangleColor ();

    }
    // G below Middle C
    if (freq <= 196 + range && freq >= 196- range){
      circlesColour ();
      
    }
  }
}


function rightTriangle () {
fill(color (random (360), 80, 80));
let w = random (20, 50);
let x =  random ( width);
let y =  random ( height);
let h = 1;
let r = random (1, 8);
rotate (PI/r);
rightTri (x, y, w, h);
}

function regularTriangle() {
fill(color (random (360), 80, 80));
let w = random (20, 50);
let x =  random (width);
let y =  random ( height);
let h = 1;
let r = random (-12, 12);
rotate (PI/r);
tri (x, y, w, h);
}
function regularTriangleColor() 
{
let w = random (20, 50);
let x =  random (width);
let y =  random (height);
let y2 = y+5;
let h = 1;
let r = random (1, 8);
rotate (PI/r);
tri (x, y, w, h);
fill(color (random (360), 80, 80));
tri (x, y2, w-10, h);


}

function squares () {
let w = random (40, 70);
fill(color (random (360), 80, 80));
let x =  random (w, width-w);
let y = random (w, height-w);
let h = 1;
let r = random (1, 8);
rotate (PI/r);
rect (x, y, w, w)
}

function rectangles() {
fill(color (random (360), 80, 80));
let w = random (20, 50);
let x =  random (w, width-w);
let y = random (w, height-w);
let h = y +10
let r = random (-4, 4);
rotate (PI/r);
rect (x, y, w, h);
}

function longRectColour () {
fill(color (random (360), 80, 80));
let w = random (30, 60);
let x =  random (w, width-w);
let y = random (w, height-w);
let x2 =  x+10
let y2 = y+10
let h = y +200
let r = random (-8, 8);
rotate (PI/r);
rect (x, y, w, h);
fill (color (random (360), 80, 80));
rect (x2, y2, w-20, h);
}

function longRect () {
fill(color (random (360), 80, 80));
let w = random (30, 60);
let x =  random (w, width-w);
let y = random (w, height-w);
let x2 =  x+10
let y2 = y+10
let h = y +200
let r = random (-8, 8);
rotate (PI/r);
rect (x, y, w, h);
fill (color (random (360), 80, 80));

}

function circles () {
  stroke ("black");
  strokeWeight (1);
fill(color (random (360), 80, 80));
let w = random (20, 60);
let x =  random (w, width-w);
let y = random (w, height-w);
let h = 1;
ellipse (x, y, w);
}

function circlesColour () {
  stroke ("black");
  strokeWeight (1);
fill(color (random (360), 80, 80));
let w = random (20, 60);
let x =  random (w, width-w);
let y = random (w, height-w);
let h = 1;
ellipse (x, y, w);
fill(color (random (360), 80, 80));
ellipse (x, y, w-10);
fill(color (random (360), 80, 80));
ellipse (x, y, w-20);
}