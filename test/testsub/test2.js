const assert = require('assert');
// Add --recursive to packagejson to include subfolder tests
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('should return 2 when the value is at index 2', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });

    it('This test is pending', function () {
      assert.equal([1, 2, 3].indexOf(3), 2);
    });
  });
});
