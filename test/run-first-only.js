const { describe, it } = require('node:test');

const should = require('should');
const runFirstOnly = require('../');

describe('run-first-only', function () {
  it('should only call callback once when serial', function (_, done) {
    let v = 0;
    const doThis = runFirstOnly(function (fn) {
      setTimeout(function () {
        fn(null, ++v);
      }, 5);
    });

    doThis(function (err, value) {
      should.not.exist(err);
      value.should.eql(1);

      doThis(function (err, value) {
        should.not.exist(err);
        value.should.eql(1);

        done();
      });
    });
  });

  it('should only call callback once when parallel', function (_, done) {
    const ITER = 5;
    let v = 0;
    let called = 0;

    const doThis = runFirstOnly(function (fn) {
      setTimeout(function () {
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

    for (let i = 0; i < ITER; i++) {
      doThis(callback);
    }
  });

});
