// SOLUTION 1   -----> Using inbuilt javascript methods


function checkIfPalindrome() {
  // This regular expression will be used to remove non-alphanumeric string or simply it will match
  // letters from a to z in small letters and in caps and also numbers

    var str = document.getElementById('str').value;

    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    // The string will be formatted to be in lowercase and in only alpahnumeric characters

    var formatStrng = str.toLowerCase().replace(re,'');

    var reverseString = formatStrng.split('').reverse().join('');
    console.log(reverseString)
    console.log(formatStrng)

    if (formatStrng === reverseString) {

      alert(str + ' is a palindrome');
      return true
    }
    else {
      alert(str + ' is NOT a palindrome');

      return false;
    }
}
//
// document.getElementById('btn').addEventListener('click',function(){
//   checkIfPalindrome();
// })


// SOLUTION ----> Using a for loop


function checkIfPalindrome2(){

  var strng = document.getElementById('str').value;

  // regular expression to format the string to alphanumeric and lower case letters

   var re = /[\W_]/g;
   strng = strng.toLowerCase().replace(re, '');
   var len = strng.length;

/*
    This loop will run from both the the last element { strng[len-1-i] }and from
    the first element strng[i] until they meet at the center and each time checking each element to check if they match
    It will then check if both elements are the same
*/
   for (var i = 0; i < len/2; i++) {
     if (strng[i] !== strng[len -1 -i]) {
       alert('This strng is NOT a palindrome')
       return false
      }
    }

}


document.getElementById('btn').addEventListener('click',function(){
  checkIfPalindrome2();
})
