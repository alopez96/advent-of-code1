//question 1 - what floor does Santa end up on
// ( Santa goes up 1 floor
// ) Santa goes down 1 floor

//question 2 - When does santa first enter the basement?

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

  //break up the strings
  const stringsArray = strings.split('');

  //testing
  console.log('total steps', stringsArray.length);

  //intialize floor count to 0, at step 0, and Santa has not entered basement yet
  floor = 0;
  basement = false;
  basementCount = 0;
  step = 0;

  //loop through directions
  for(i = 0; i < stringsArray.length; i++){
    step = step + 1;
    if(stringsArray[i] === '('){
      floor = floor + 1;
    }
    else if(stringsArray[i] === ')'){
      floor = floor - 1;
      //Santa is going down, and enters basement
      if (floor === -1){
        //First time Santa enters basement
        if (basement === false){
          //Santa can no longer say he hasn't entered
          basement = true;
          //store the step at which he enters
          //solution to number 2
          basementCount = step;
        }
      }
    }

  }
  console.log('Santa first enters basement at step:', basementCount);
  console.log('Santa ends up on floor:', floor);
})
console.timeEnd('execution time');
}

finalFloor();
