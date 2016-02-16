var _width = window.innerWidth;
var _height = window.innerHeight;
var coords = { x: _width, y: _height, area: 1 };
var zColor = Math.floor((Math.random() * 255));
var osc;

function setup() {
  createCanvas(_width, _height);
  noStroke();
  createOscillator();
  createTracker();
  hideVideo();
};

function draw() {
  drawEllipse();
  xCord = width - coords.x;
  yCord = coords.y;
  osc.freq(xCord);
  osc.amp(height / (yCord + 0.001));
};

function drawEllipse() {
  var rainbow = document.getElementById("rainbowBoolean").checked
  rainbow ? drawRainbowEllipse() : drawPaintEllipse()
}

function drawRainbowEllipse() {
  var xColor = (width - coords.x) / (width / 255);
  var yColor = coords.y / (height / 255);
  var size = randomGaussian(40, 35);
  fill(zColor, yColor, xColor);
  ellipse(width - coords.x, coords.y, size, size);
}

function drawPaintEllipse() {
  var color = document.getElementById("colorPicker").value.toLowerCase();
  var hex = colorNameToHex(color)
  var rgb = [255, 0, 255];
  if (hex) rgb = unhex(hex.substr(1).match(/(.{1,2})/g));
  fill(rgb[0], rgb[1], rgb[2])
  ellipse(width - coords.x, coords.y, coords.area, coords.area);
}

function createOscillator() {
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(50);
  osc.amp(0);
  osc.start();
}

function keyPressed() {
  if (keyCode === ENTER) {
    zColor = randomRGB()
    background(randomRGB(), randomRGB(), randomRGB());
  }
};

function randomRGB() {
  return Math.floor((Math.random() * 255));
}
