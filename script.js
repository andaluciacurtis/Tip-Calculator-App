const resetButton = document.querySelector(".reset");
const tipButtons = document.querySelectorAll(".button-grid > div");

const tipAmount = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-per-person");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");

let bill;
let numberOfPeople;
let tipPercent;

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
  calculateTotal();
};

// TIP
// Check to see if one button is already selected
// If so: remove selected from that one
//        add selected to new button
//        save amount in variable

// NUMBER OF PEOPLE
peopleInput.oninput = ()=> {
  numberOfPeople = peopleInput.valueAsNumber;
  calculateTotal();
}

// TIP AMOUNT
// display bill/person * tip %

function calculateTotal() {
  let amountPerPerson = (bill / numberOfPeople).toFixed(2);
  let tip =  0;

  tipAmount.innerHTML = tip;

  let total = (+amountPerPerson + +tip).toFixed(2);
  totalPerPerson.innerHTML = `$${total}`;
}

// TOTAL 
// display bill + tip %