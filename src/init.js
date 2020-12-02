$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {
    var lineUpFunction = window['lineUp'];
    lineUpFunction();
  });

  $('.addDancerButton').on('click', function(event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');


    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
});