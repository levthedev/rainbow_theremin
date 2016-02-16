function createTracker() {
  var tracker = new tracking.ColorTracker(["magenta"]);
  tracking.track('#video', tracker, { camera: true });
  tracker.on('track', function(event) {
    event.data.forEach(function(rect) {
      var area = (rect.height * rect.width) / (_height * _width);
      coords.area = area * 1000;
      coords.x = rect.x;
      coords.y = rect.y;
    });
  });
};

function hideVideo() {
  var video = document.getElementById('video');
  video.setAttribute("width", _width);
  video.setAttribute("height", _height);
};
