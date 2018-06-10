const assert = require('assert');

describe('aaa', () => {
  it('shouldn\'t fail', done => {
    assert.strictEqual(2, 2);
    done();
  });

  it('should pass', done => {
    assert.strictEqual(2, 2);
    done();
  });
});
