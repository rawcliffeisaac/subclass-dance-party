var MakeSpinnyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny-dancer');
  this.left = left;
  window['spinnyCount']++;
};
MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;


MakeSpinnyDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);

  this.$node.toggle();
};

MakeSpinnyDancer.prototype.subClassLineUp = function (spinnyIterated) {
  // var spaceRatio = 100 / window['blinkyCount'] * blinkyIterated;
  // spaceRatio = spaceRatio / 100;
  // var spaceRatio = ((20 * blinkyIterated) + "px");
  this.setPosition('95%', this.left);
  // this.$node.css({right: 1000});
};