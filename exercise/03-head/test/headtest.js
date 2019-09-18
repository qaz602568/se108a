const assert = require('assert')
const _ = require('../headlodash')

describe('headlodash', function() {
  describe('head', function() {
    it("_.head([1,2,3]) equalTo [ 1 ]", function() {
      assert.deepStrictEqual(_.head([1,2,3]),  1 )
    });
    it("_.head([]) equalTo  undefined ", function() {
      assert.deepStrictEqual(_.head([]), undefined)
    });
  });
});