var should = require('should');
var runFirstOnly = require('../');

describe('run-first-only', function () {
  it('should only call callback once when serial', function (done) {
    var v = 0;
    var doThis = runFirstOnly(function(fn) {
      setTimeout(function() {
        fn(null, ++v);
      }, 5);
    });

    doThis(function(err, value) {
      should.not.exist(err);
      value.should.eql(1);

      doThis(function(err, value) {
        should.not.exist(err);
        value.should.eql(1);

        done();
      });
    });
  });

  it('should only call callback once when parallel', function (done) {
    var ITER = 5;
    var v = 0;
    var called = 0;

    var doThis = runFirstOnly(function(fn) {
      setTimeout(function() {
        fn(null, ++v);
      }, 5);
    });

    function callback(err, value) {
      should.not.exist(err);
      value.should.eql(1);

      if (++called === ITER) {
        done();
      }
    }

    for(var i = 0; i < ITER; i++) {
      doThis(callback);
    }
  });

});
