/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const fullRate = 40;
const halfRate = 25;
let selectedDays = [];

const dayButtons = document.querySelectorAll(".day-selector li");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");


function updateSelectedDays() {
  selectedDays = Array.from(document.querySelectorAll(".clicked")).map(day => day.id);
  calculateTotalCost();
}

function toggleDayClicked(event) {
  event.target.classList.toggle("clicked");
  updateSelectedDays();
}

dayButtons.forEach(button => button.addEventListener("click", toggleDayClicked));


function clearAllDays() {
  dayButtons.forEach(button => button.classList.remove("clicked"));
  selectedDays = [];
  calculateTotalCost();
}

clearButton.addEventListener("click", clearAllDays);


function setRateToFullDay() {
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  calculateTotalCost();
}

function setRateToHalfDay() {
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  calculateTotalCost();
}

fullButton.addEventListener("click", setRateToFullDay);
halfButton.addEventListener("click", setRateToHalfDay);


function calculateTotalCost() {
  const numberOfDays = selectedDays.length;
  const rate = fullButton.classList.contains("clicked") ? fullRate : halfRate;
  const totalCost = numberOfDays * rate;
  calculatedCost.textContent = totalCost;
}




