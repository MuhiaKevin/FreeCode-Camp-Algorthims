
function findLongestWord(str) {
  // create and array of the sentence

  var strngArr = str.split(' ');

  // this wiil be used to compare words size and save it as the largest word if found to be long
  var longestWord = 0;

  //  this will loop through the array made from the sentence and get each element

  for(var i = 0; i <   strngArr.length; i++){

    // compare each element and save it in the variable
    
    if(strngArr[i].length > longestWord){
    	longestWord = strngArr[i].length;
    }
  }

  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
