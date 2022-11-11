// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // 1) split the str into an array
    // 2) reverse the array
    // 3) join the array into 1 string again
    var reversedString = str.split('').reverse().join('');

    // check whether words palindrome
    if (reversedString === str) {
        return true;
    }
    else {
        return false;
    }
};