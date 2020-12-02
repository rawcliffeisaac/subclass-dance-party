// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {

  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.left = left;
  this.top = top;
  this.$node.on('click', this.pairUp.bind(this));
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

MakeDancer.prototype.pairUp = function() {
  var currentShortestDistance = 1000000000000;
  var currentShortestIndex = 0;
  for (var i = 0; i < window.dancers.length; i++) {
    var distance = Math.sqrt(Math.pow((this.left - window.dancers[i].left), 2) + Math.pow((this.top - window.dancers[i].top), 2));
    if (distance < currentShortestDistance && distance !== 0) {
      currentShortestDistance = distance;
      currentShortestIndex = i;
    }
  }
  var pair = window.dancers[currentShortestIndex];
  var topMid = (this.top + pair.top) / 2;
  var leftMid = (this.left + pair.left) / 2;
  this.setPosition(topMid, leftMid - 25);
  pair.setPosition(topMid, leftMid + 25);
};