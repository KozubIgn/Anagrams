const assert = require('chai').assert;
const anagram = require('../anagram');


describe('Anagram', function () {
    it('should return string', function () {
        let result = anagram.ReadLines();
        assert.typeOf(result, 'array');
    });

    it('GenerateKeyList should return type array', function () {
        let result = anagram.GenerateKeyList();
        assert.typeOf(result, 'array');
    });
});

describe('ListOfAnagrams', function () {
    let resultArray = anagram.ListOfAnagrams();

    it('should found 60 anagrams', function () {
        let result = resultArray.length;
        assert.equal(result, 60)
    });
});

