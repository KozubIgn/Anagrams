let fs = require('fs');
let filename = 'wordlist.txt';
let alfabCharKey,
    textByLine;

module.exports = {
    ReadLines: function () {
        textByLine = fs.readFileSync(filename).toString().split("\n");
// console.log(textByLine);
        return textByLine;
    },

    GenerateKeyList: function () {
        let words = {};
        for (let i = 0; i < textByLine.length; i++) {
            let word = textByLine[i];
            if (word !== '') {

                alfabCharKey = word.split('').sort().join('');
                let list = words[alfabCharKey] || [];
                list.push(word);
                words[alfabCharKey] = list;
                return list;
            }
        }
    },

    ListOfAnagrams: function () {
        let anagrams = [];
        for (alfabCharKey in words) {
            if (words.hasOwnProperty(key)) {
                if (words[key].length > 1) anagrams.push(words[key]);
            }
        }
        anagrams.sort(function (a, b) {
            return (b.length - a.length);
        });
        console.log(" found: " + anagrams.length);
        console.log(anagrams.join("\n"));
    }

}

