let input = 'a whale of a deal!'; // A string variable containing strings
const vowels = ['a', 'e', 'i', 'o', 'u']; //Vowels 
let resultArray = []; //Array to contain pronoucing of statement by wheels

//Outer loop to iterate through the variable
for (let inputIndex = 0; inputIndex< input.length; inputIndex++){
  //loop to check every single character with the vowel array if there is a match.
  for (let vowel = 0; vowel< vowels.length; vowel++){
    //A conditional statement to check if there is a match
     if(input[inputIndex] === vowels[vowel]){
       //If there is a match and is e what it should do
      if(input[inputIndex] ==='e'){
        resultArray.push('ee');
      }else if(input[inputIndex]=== 'u'){
          resultArray.push('uu');
      }
      else{
        resultArray.push(input[inputIndex]);
        }
      }
    }
   
  }
  console.log(resultArray.join('').toUpperCase());

