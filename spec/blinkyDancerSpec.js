describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('makeDancer', function() {
    it('should create subclass instances that have the correct constructor', function() {
      var spinnyDancer = new MakeSpinnyDancer(15, 15, timeBetweenSteps);
      expect(spinnyDancer.constructor).to.be.equal(MakeSpinnyDancer);
    });
  });

  describe('makeDancer', function() {
    it('should create an instance of the subclass', function() {
      var spinnyDancer = new MakeSpinnyDancer(15, 15, timeBetweenSteps);
      var correctInstanceOf = spinnyDancer instanceof MakeSpinnyDancer;
      expect(correctInstanceOf).to.be.equal(true);
    });
  });
});
