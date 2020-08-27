let fs = require('fs');
let filename = 'test.txt';
let alfabCharKey,
    listOfword,
    textByLine,
    alfabCharkeyWithAnagrams;


let anagram = {
    ReadLines: function() {
        textByLine = fs.readFileSync(filename).toString().split("\n");
// console.log(textByLine);
        return textByLine;
    },

    GenerateKeyList: function() {
         alfabCharkeyWithAnagrams = {};
        for (let i = 0; i < textByLine.length; i++) {
            let word = textByLine[i];
            if (word !== '') {

                alfabCharKey = word.split('').sort().join('');

                let listOfword = alfabCharkeyWithAnagrams[alfabCharKey] || [];
                listOfword.push(word);
                alfabCharkeyWithAnagrams[alfabCharKey] = listOfword;

                // console.log(alfabCharKey)
                // console.log(listOfword)
                // console.log(word)
                // console.log(alfabCharkeyWithAnagrams)
            }
        }
        return listOfword;
    },

    ListOfAnagrams: function() {
        let anagrams = [];
        for (alfabCharKey in alfabCharkeyWithAnagrams) {
            if (alfabCharkeyWithAnagrams.hasOwnProperty([alfabCharKey])) {
                if (alfabCharkeyWithAnagrams[alfabCharKey].length > 1) anagrams.push(alfabCharkeyWithAnagrams[alfabCharKey]);
            }
        }
        anagrams.sort(function (a, b) {
            return (b.length - a.length);
        })
        console.log(" found: " + anagrams.length);
        console.log(anagrams.join("\n"));
    }
}
anagram.ReadLines()
anagram.GenerateKeyList();
anagram.ListOfAnagrams();
module.exports = anagram;

