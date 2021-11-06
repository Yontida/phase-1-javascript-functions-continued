// Your code here

// uses the default activity 'roller-skate' when no arguments are passed
function saturdayFun(activity = 'roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = 'go to the office'){
  return `This Monday, I will ${work}.`;
}

// #1 method
function wrapAdjective (flair = "*"){
  const innerFunction = function (adj = "special"){
    return `You are ${flair}${adj}${flair}!`
  };
  return innerFunction;
}

// #2 method
// function wrapAdjective (flair = "*"){
//   return function innerFunction (adj = "special"){
//     return `You are ${flair}${adj}${flair}!`
//   } 
// }

// console.log(wrapAdjective("%")("a dedicated programmer"));