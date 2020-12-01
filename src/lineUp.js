var blinkyCount = 0;
var bouncyCount = 0;
var spinnyCount = 0;

var lineUp = function () {
  var blinkyIterated = 1;
  var bouncyIterated = 1;
  var spinnyIterated = 1;
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i] instanceof MakeBlinkyDancer) {
      window.dancers[i].subClassLineUp(blinkyIterated);
      blinkyIterated++;
    }
    if (window.dancers[i] instanceof MakeBouncyDancer) {
      window.dancers[i].subClassLineUp(bouncyIterated);
      bouncyIterated++;
    }
    if (window.dancers[i] instanceof MakeSpinnyDancer) {
      window.dancers[i].subClassLineUp(spinnyIterated);
      spinnyIterated++;
    }
  }
};