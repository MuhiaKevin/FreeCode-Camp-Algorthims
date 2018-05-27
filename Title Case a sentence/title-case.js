// basic algorithim to change every first letter of a word in a sentence

function titleCase(str) {
  //  break the sentence into an array

  str = str.toLowerCase().split(' ');

  for (var i = 0; i < str.length; i++) {
    // grab the first letter of each element in the array and change it make it a capital letter

    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
