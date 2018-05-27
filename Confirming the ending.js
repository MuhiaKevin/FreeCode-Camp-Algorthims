function confirmEnding(str, targetLetter){
  if(str.substr(-targetLetter.length) === targetLetter){

    return true
  }

  else{
    return false
  }

}
