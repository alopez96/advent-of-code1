//question 1 - what floor does Santa end up on
// ( Santa goes up 1 floor
// ) Santa goes down 1 floor

//question 2 - When does santa first enter the basement


const fs = require('fs');
//solution to 1
function finalFloor() {
  console.time('execution time');
  fs.readFile('./santa.txt', (err, data) => {
  if(err) {
    console.log('error', err);
  }
  //get all strings
  const strings = data.toString();
  // console.log('santa.txt: ', strings);

  //break up the strings
  const stringsArray = strings.split('');

  console.log('total steps', stringsArray.length);
  floor = 0;
  for(i = 0; i < stringsArray.length; i++){
    if(stringsArray[i] === '('){
      floor = floor + 1;
    }
    else if(stringsArray[i] === ')'){
      floor = floor - 1;
    }
  }
  console.log('Santa ends up on floor:', floor);

})

console.timeEnd('execution time');
}

finalFloor();
