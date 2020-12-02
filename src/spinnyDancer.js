var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny-dancer');
};
MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

MakeSpinnyDancer.prototype.swell

MakeSpinnyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  // this.$node.toggle();
};

MakeSpinnyDancer.prototype.subClassLineUp = function (spinnyIterated) {
  this.setPosition('95%', this.left);
};