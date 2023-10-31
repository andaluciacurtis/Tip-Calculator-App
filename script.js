const resetButton = document.querySelector(".reset");
const tipButtons = document.querySelectorAll(".button-grid > div");

const tipAmount = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-per-person");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");

const errorText = document.querySelector(".error-text");

let bill = 0;
let numberOfPeople = 0;
let tipPercent = 0;

let isTipChosen = false;

// RESET
resetButton.addEventListener("click", ()=>{
  billInput.value = "";
  peopleInput.value = "";

  numberOfPeople = 0;
  bill = 0;
  tipPercent = 0;

  // Deselect tip
  resetErrorMessage();
  tipAmount.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
});

// BILL
billInput.oninput = ()=> {
  bill = billInput.valueAsNumber.toFixed(2);
  calculatePrices();
};

// TIP
// Check to see if one button is already selected
// If so: remove selected from that one
//        add selected to new button
//        save amount in variable

// NUMBER OF PEOPLE
peopleInput.oninput = ()=> {
  numberOfPeople = peopleInput.valueAsNumber;
  calculatePrices();
}

// TIP AMOUNT
// display bill/person * tip %

function calculatePrices() {
  if (numberOfPeople === 0) {
    errorText.style.visibility = "visible";
    peopleInput.classList.add("error-input");
  } else {
    resetErrorMessage();

    let amountPerPerson = (bill / numberOfPeople).toFixed(2);
  
    let tip = amountPerPerson * tipPercent;
    tipAmount.innerHTML = `$${(tip).toFixed(2)}`;
  
    let total = (+amountPerPerson + +tip).toFixed(2);
    totalPerPerson.innerHTML = `$${total}`;
  }
}

function resetErrorMessage() {
  errorText.style.visibility = "hidden";
  peopleInput.classList.remove("error-input");
}