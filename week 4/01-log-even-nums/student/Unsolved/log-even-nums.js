// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

// solution 1
// var logEvenNums = function(num) {
//     // set up the for loop to increment val depending on the given value to "num"
//     for (let i = 0; i <= num; i++) {
//         // conditional to get even numbers
//         // then, console log "i" if even
//         if (i % 2 === 0 ){
//             console.log(i);
//         }
//     }
// };

// solution 2
var logEvenNums = function(num) {
    // add "i" by 2 to ensure values is always logged even
    for (let i = 0; i <= num; i += 2) {
        console.log(i);
    }
}