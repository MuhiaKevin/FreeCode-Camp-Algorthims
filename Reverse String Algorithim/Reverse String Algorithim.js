
// Solutuion 1 ---> Use in-built javascript methods


function reverseString() {
  var str = document.getElementById('str').value;
  var reversed = document.getElementById('reversed_text').innerHTML;
  var array = [];
  array = str.split('');
  array.reverse();
  str = array.join('');


  reversed = str;
  console.log(reversed)
}


document.getElementById('btn').addEventListener('click', function(){
	reverseString();
});



// Solution 2 --> Using  a decrementing loop


function reverseString2(){
  var str = document.getElementById('str').value;

  // this variable will hold the newly reversed string

  var newString = '';

/*
  This loop will start from the last element of the string and add each element
  to the newString variable

*/

  for (var i = str.length -1; i >= 0; i--) {
    newString += str[i];
    console.log(newString)
  }


  return newString;
}

























// TO DO

// Rewrite the reverse inbuilt function in javscript
