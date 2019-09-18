const assert = require('assert')
const _ = require('../droplodash')

describe('droplodash', function() {
  describe('drop', function() {
    it("_.drop([1,2,3]) equalTo [ [ 2,3 ] ]", function() {
      assert.deepStrictEqual(_.drop([1,2,3]),  [2,3] )
    });
    it("_.drop([1,2,3], 2) equalTo [ [ 3 ] ]", function() {
      assert.deepStrictEqual(_.drop([1,2,3], 2), [ 3 ])
    });
    it("_.drop([1,2,3], 5) notEqualTo [ [ ] ]", function() {
      assert.deepStrictEqual(_.drop([1,2,3], 5), [ ])
    });
    it("_.drop([1,2,3], 0) notEqualTo [ [ 1,2,3 ] ]", function() {
      assert.deepStrictEqual(_.drop([1,2,3], 0), [ 1,2,3 ])
    })
  });
});