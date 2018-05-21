const assert = require('assert');

describe('aaa', () => {
  it('should fail', done => {
    assert.strictEqual(1, 2);
    done();
  });

  it('should pass', done => {
    assert.strictEqual(2, 2);
    done();
  });
});
