// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  var strArr = str.toLowerCase().split('');
  var vowelsArr = ["a","e","i","o","u"];
  var foundVowel = false;
  var vowelCount = 0;
  for(var j = 0; j < strArr.length; j++){
    //console.log(strArr[j]);
    
    var input = strArr[j];
    for(var i = 0; i < vowelsArr.length; i++){
        // console.log(vowelsArr[i])
        if(vowelsArr[i] === input){
            foundVowel = true;
            vowelCount++;
            break;
        }
    }
  }
  return vowelCount;

};
