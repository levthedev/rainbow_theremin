coords = {
  x: 0.1,
  y: 0.1
};

window.onload = function() {
  var video = document.getElementById('video');
  video.setAttribute("width", window.innerWidth);
  video.setAttribute("height", window.innerHeight);

  var tracker = new tracking.ColorTracker();
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      coords.x = rect.x;
      coords.y = rect.y;
    });
  });
};

var osc;
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
  xCord = width - coords.x;
  yCord = coords.y;
  var xColor = xCord / (width / 255);
  var yColor = yCord / (height / 255);
  fill(zColor, yColor, xColor);
  var size = randomGaussian(40, 35);
  ellipse(width - coords.x, coords.y, size, size);
  osc.freq(xCord);
  console.log(yCord)
  osc.amp(height / (yCord + 0.001));
}

function mouseClicked() {
  rgb1 = Math.floor((Math.random() * 255));
  rgb2 = Math.floor((Math.random() * 255));
  rgb3 = Math.floor((Math.random() * 255));
  background(rgb1, rgb2, rgb3);
}
