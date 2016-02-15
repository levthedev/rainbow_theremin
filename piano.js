var osc;
var playing = false;
const zColor = Math.floor((Math.random() * 255));

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  var xColor = mouseX / (width / 255);
  var yColor = mouseY / (height / 255);
  fill(zColor, yColor, xColor);
  var size = randomGaussian(40, 35);
  ellipse(mouseX, mouseY, size, size);
  osc.freq(mouseX);
  osc.amp(mouseY / height);
}

function mouseClicked() {
  background(Math.floor((Math.random() * 255)), Math.floor((Math.random() * 255)), Math.floor((Math.random() * 255)))
}
