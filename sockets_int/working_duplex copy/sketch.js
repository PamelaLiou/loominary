/*
 * @name Regular Polygon
 * @description What is your favorite? Pentagon? Hexagon? Heptagon? No? 
 * What about the icosagon? The polygon() function created for this example is 
 * capable of drawing any regular polygon. Try placing different numbers into 
 * the polygon() function calls within draw() to explore.
 */
 function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(parseInt(red));
  
  push();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  fill(parseInt(red),parseInt(green),parseInt(blue))
  polygon(0, 0, 82, 3); 
  pop();
  
  push();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  fill(parseInt(red),parseInt(green),parseInt(blue))
  polygon(0, 0, 80, 20); 
  pop();
  
  push();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  fill(parseInt(red),parseInt(green),parseInt(blue))
  polygon(0, 0, 70, 7); 
  pop();
}

function makeRandArray(){
  var randArray =[];
  
  for (var i =0; i <16; i++){
    randArray.push(Math.round(Math.random(0,1)));
  }
  
  return randArray

}


function mousePressed(){
  var thisArray = [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0];
  toSerial(makeRandArray());

}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}