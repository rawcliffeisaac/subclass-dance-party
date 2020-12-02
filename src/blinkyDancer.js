var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky-dancer');
};


MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

MakeBlinkyDancer.prototype.subClassLineUp = function (blinkyIterated) {
  this.setPosition(this.top, 0);
  this.left = 0;
};

