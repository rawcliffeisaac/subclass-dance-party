var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncy-dancer');
  this.top = top;
  window['bouncyCount']++;
};


MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;

MakeBouncyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  // this.$node.animate({height: "100px"}, );
};

MakeBouncyDancer.prototype.subClassLineUp = function (bouncyIterated) {
  // var spaceRatio = 100 / window['blinkyCount'] * blinkyIterated;
  // spaceRatio = spaceRatio / 100;
  // var spaceRatio = ((20 * blinkyIterated) + "px");
  this.setPosition(this.top, '95%');
  // this.$node.css({right: 1000});
};