const resetButton = document.querySelector(".reset");
const tipButtons = document.querySelectorAll(".button-grid > div");

const tipAmount = document.querySelector(".tip-amount");
const totalPerPerson = document.querySelector(".total-per-person");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const customTipInput = document.querySelector(".custom-tip")

const errorText = document.querySelector(".error-text");

let bill = 0;
let numberOfPeople = 0;
let tipPercent = 0;

let isTipChosen = false;
let chosenTipButton;

// RESET
resetButton.addEventListener("click", ()=>{
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";

  numberOfPeople = 0;
  bill = 0;
  tipPercent = 0;

  clearTipSelection();
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
tipButtons.forEach(button => button.addEventListener("click", ()=>{
  clearTipSelection();

  // Switching selected to clicked button
  isTipChosen = true;
  chosenTipButton = button;
  chosenTipButton.classList.add("selected-button");

  // Extracting tip amount from button
  tipPercent = parseFloat(chosenTipButton.innerText) / 100;

  calculatePrices();
}));

customTipInput.oninput = ()=> {
  tipPercent = (customTipInput.valueAsNumber) / 100;
  calculatePrices();
}

// NUMBER OF PEOPLE
peopleInput.oninput = ()=> {
  numberOfPeople = peopleInput.valueAsNumber;
  calculatePrices();
}

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

function clearTipSelection() {
  if (isTipChosen) {
    chosenTipButton.classList.remove("selected-button");
    isTipChosen = false;
  }
}