
/*let name = "Jared Strohschein"
let principal = 200000;
let interestRate = .05;
let years = 30;


let periods = years * 12;
let monthlyInterestRate = interestRate / 12;


let calculation = Math.pow((monthlyInterestRate + 1), periods); //raises an incremented interest rate to a value of periods

let numerator = monthlyInterestRate * calculation;

let denominator = calculation - 1;

let monthlyRate = principal * (numerator / denominator);*/




//mortgage calc definition. NOTE: I chose to use years as a parameter here bc using periods('N' in the equation) would require a pre-function calculation. This method allows the call without first calculating for N.

function mortgageCalculator (client, principal, interestRate, years, creditScore, propertyTax, insurance, HOA){
  
  if (creditScore < 660){
    interestRate += .005;
  }
    else if (interestRate > 740){
      interestRate -= .005;
    }
    
  let periods = years * 12;
  let monthlyInterestRate = interestRate / 12;
  
  
  let calculation = Math.pow((monthlyInterestRate + 1), periods);
  
  let numerator = monthlyInterestRate * calculation;
  
  let denominator = calculation - 1;
  
  let monthlyRate = principal * (numerator / denominator);

  monthlyRate += (insurance + HOA + ((principal * propertyTax) / 12));

  console.log(client + ", your monthly payment is $" + monthlyRate.toFixed(2));
} //End mortgageCalculator

mortgageCalculator("Jared", 200000, .05, 30, 750);



function variableInterestRate (client, principal, interestRate, years, propertyTax, insurance, HOA){

  
  interestRate -= .02;

  for (var i = 0; i < 10; i++){

  let periods = years * 12;
  let monthlyInterestRate = interestRate / 12;
  
  
  let calculation = Math.pow((monthlyInterestRate + 1), periods);
  
  let numerator = monthlyInterestRate * calculation;
  
  let denominator = calculation - 1;
  
  let monthlyRate = principal * (numerator / denominator);

  monthlyRate += (insurance + HOA + ((principal * propertyTax) / 12));

  console.log(client + ", your monthly payment with a " + (interestRate * 100).toFixed(1) + "% interest rate is $" + monthlyRate.toFixed(2));

  interestRate += .005;
  }
} //End variableInterestRate

variableInterestRate ("Jared", 200000, .05, 30, .01, 100, 75);



// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */
