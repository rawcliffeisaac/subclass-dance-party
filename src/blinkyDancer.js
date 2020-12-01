var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
  this.top = top;
  window['blinkyCount']++;
};


MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

MakeBlinkyDancer.prototype.subClassLineUp = function (blinkyIterated) {
  // var spaceRatio = 100 / window['blinkyCount'] * blinkyIterated;
  // spaceRatio = spaceRatio / 100;
  // var spaceRatio = ((20 * blinkyIterated) + "px");
  this.setPosition(this.top, 0);
};

