var assert = require('assert');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });

        it('should return 2 when the value is at index 2', function () {
            assert.equal([1, 2, 3].indexOf(3), 2);
        });

        it.skip('This test is pending', function () {
            assert.equal([1, 2, 3].indexOf(3), 2);
        });
    });
});