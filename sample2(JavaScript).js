//a > 10 ? 'a is bigger than 10' : 'a is less than or equal to 10 ' + (a === 5 ? 'an example of a special case' : '')) + (a === 15 ? 'but a is not 15' : '')+ (a > 5 ? 'and a is greater than 5' : 'and a is less than or equal to 5 ') + (a % 2 ? ' and a is odd' : ' and a is even ');
//if...else
function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    if(a > 10){
        console.log('a is bigger than 10');
    }
    else{
        console.log('a is less than or equal to 10 '); 
    } 
    if(a===5){
        console.log('an example of a special case'); 
    }           
    if(a === 15){
        console.log('but a is not 15'); 
    }
    if(a > 5){
        console.log('and a is greater than 5'); 
    }
    else{
        console.log('and a is less than or equal to 5 ');
    } 
    if(a % 2){
        console.log(' and a is odd'); 
    }
    else{
        console.log(' and a is even ');
    } 
    return 
    }
  
  manyChecks();

//switch
  function manyyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
    switch(true){
        case (a > 10):
            console.log('a is bigger than 10');
            break;
        default:
            console.log('a is less than or equal to 10 '); 
            break;
    }
    switch(true){
        case ((a===5)):
            console.log('an example of a special case'); 
            break;
        case (a === 15):
            console.log('but a is not 15'); 
            break;
    }
    switch(true){
        case (a > 5):
            console.log('and a is greater than 5'); 
            break;
        default:
            console.log('and a is less than or equal to 5 ');
            break;
        }
    switch(true){
        case (a % 2):
            console.log(' and a is odd'); 
            break;
        default:
            console.log(' and a is even ');
            break;
            }    

    return 
  }
  
  manyyChecks();
  
