
function largestNumberInSubArray(aray){
  // create an array that will host as result of the 4 sub array
  // this will be used to compare between each element of the subarray and save the largest number of each subarray in the aray[i] element

  var newArray = [0,0,0,0]


// first loop through a the main array to get the subArray

  for(let i = 0; i < aray.length; i++){
    // console.log(aray[i]

// loop through the second array to get each element of the subArray

    for(let j = 0; j < aray[i].length;j++){

 // compare each element of each subArray element

      if(aray[i][j] > newArray[i]){

// if the element is greater than 0 then that element will be the newArray[i] element of the array and this will go on until the largest element of the subarray is found

        newArray[i] = aray[i][j]

      }
    }

  }

  return newArray;
}
