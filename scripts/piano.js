coords = {
  x: window.innerWidth,
  y: window.innerHeight,
  area: 1
};

window.onload = function() {
  var video = document.getElementById('video');
  video.setAttribute("width", window.innerWidth);
  video.setAttribute("height", window.innerHeight);

  var tracker = new tracking.ColorTracker();
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      var area = (rect.height * rect.width) / (window.innerHeight * window.innerWidth);
      coords.area = area * 1000;
      coords.x = rect.x;
      coords.y = rect.y;
    });
  });
};

var osc;
var zColor = Math.floor((Math.random() * 255));

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(50);
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
  ellipse(width - coords.x, coords.y, coords.area, coords.area);
  osc.freq(xCord);
  osc.amp(height / (yCord + 0.001));
}

function mouseClicked() {
  rgb1 = Math.floor((Math.random() * 255));
  rgb2 = Math.floor((Math.random() * 255));
  rgb3 = Math.floor((Math.random() * 255));
  zColor = Math.floor((Math.random() * 255));
  background(rgb1, rgb2, rgb3);
}
