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
  var size = randomGaussian(40, 35)
  ellipse(mouseX, mouseY, size, size);
  osc.freq(mouseX);
}

function mouseClicked() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    if (!playing) {
      osc.amp(0.5, 0.05);
      playing = true;
    } else {
      osc.amp(0, 0.5);
      playing = false;
    }
  }
}
