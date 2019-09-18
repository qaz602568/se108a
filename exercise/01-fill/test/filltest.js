const assert = require('assert')
const _ = require('../fillLodash')

describe('fillLodash', function() {
  describe('fill', function() {
    it("_.fill([1,2,3],'a') equalTo [ [ 'a', 'a', 'a' ] ]", function() {
      assert.deepStrictEqual(_.fill([1,2,3],'a'),  ['a', 'a', 'a'] )
    });
    it("_.fill([1,2,3], 2) equalTo [ [ 2, 2, 2 ] ]", function() {
      assert.deepStrictEqual(_.fill([1,2,3], 2), [ 2, 2, 2 ])
    });
    it("_.fill([1,2,3], '*', 1, 3) notEqualTo [ [1,'*','*' ] ]", function() {
      assert.deepStrictEqual(_.fill([1,2,3], '*', 1, 3), [1,'*','*' ])
    });
    
    
  });
});