// Write code to create a function 
// takes a string and returns a new string 
// with the first letters of each word capitalized

var titleCase = function(str) {
    // split each words into an array
    let words = str.split(" ");
    // setup an empty array for the outcome
    let result = [];

    // loop through each the words array  
    for (let i = 0; i < words.length; i ++) {
        // break down each "words" into an array of "word"
        let word = words[i].split("");

        // target index 0 to of each word to upper case
        words[0] = word[0].toUpperCase();

        // push to "result" once every words are joined
        result.push(word.join(""));
    }
    // join the result and give each word space 
    return result.join(" ");
};
