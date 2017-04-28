var should = require('should');
var runFirstOnly = require('../');

describe('run-first-only node module', function () {
  it('must have at least one test', function () {
    runFirstOnly();
    should.fail('Need to write tests.');
  });
});
