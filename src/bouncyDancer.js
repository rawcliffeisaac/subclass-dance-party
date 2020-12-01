var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};


MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  // This should not work !
  // Find correction for this line to have static dot
  this.$node.toggle('bounce', {times: 1}, 50);
  this.$node.animate({height: '+=150px'});
};