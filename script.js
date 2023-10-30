const resetButton = document.querySelector(".reset");
const tipButtons = document.querySelectorAll(".button-grid > div");

const tipAmount = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-per-person");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");

var bill;
var numberOfPeople;

// RESET
resetButton.addEventListener("click", ()=>{
  // Reset input
  // Deselect tip
  // Get rid of error messages

  // Reset tip and total amount
});

// BILL
billInput.oninput = ()=> {
  bill = billInput.valueAsNumber.toFixed(2);
};

// TIP
// Check to see if one button is already selected
// If so: remove selected from that one
//        add selected to new button
//        save amount in variable

// NUMBER OF PEOPLE
// Check to see if number of people is a valid number
// Save into variable

// TIP AMOUNT
// display bill/person * tip %

// TOTAL 
// display bill + tip %