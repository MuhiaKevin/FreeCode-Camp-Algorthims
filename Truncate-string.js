function truncateString(str,num){

  // if the length of the string is greater than the num and the num is greater than 3
  //  then slice the string starting at position o to the num-3

    if (str.length > num && num > 3) {
      return str.slice(0,(num - 3)) + '...'
    }

    // if the length of the string is greater than num and num is greater than 3 then truncate starting at position 3
    // upto position num

    else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...'
    }

    // Else just return string the way it is

    else{
      return str
    }
}

truncateString('My name is kevin Muhia', 4)
