//create variables

let costPerDay = 35;
let dayCounter = 0; //number of days selected (counter)
let totalCost = 0;
//since the value must be reassigned I used let so I can update it (but not re-declare) 

const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");

const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear-button");
const calculatedCost = document.getElementById("calculated-cost");
//for the rest I used const identifiers because they should not be re-assigned or updated.

//color changes logic
//when the day buttons are clicked, "clicked" class will be applied to that element, and update any other relevant variables.
//doesn't update dayCounter if the same day is clicked more than once.

function whenClicked(dayButton) {
    if (!dayButton.classList.contains("clicked")) {
        dayButton.classList.add("clicked");
        dayCounter++;
        calculate();
    }
}

mondayButton.onclick = function() {whenClicked(mondayButton);};
tuesdayButton.onclick = function() {whenClicked(tuesdayButton);};
wednesdayButton.onclick= function() {whenClicked(wednesdayButton);};
thursdayButton.onclick = function() {whenClicked(thursdayButton);};
fridayButton.onclick = function() {whenClicked(fridayButton);};

//clear days logic
//"clicked" class removed from all days when clear button is clicked

clearButton.onclick = function() {
    mondayButton.classList.remove("clicked");
    tuesdayButton.classList.remove("clicked");
    wednesdayButton.classList.remove("clicked");
    thursdayButton.classList.remove("clicked");
    fridayButton.classList.remove("clicked");

    dayCounter = 0;
    totalCost = 0;
    calculate();
};

//change rate logic
//when the half-day button clicked: daily rate = $20

halfButton.onclick = function() { 
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
};

//when the half-day button clicked: daily rate = $35

fullButton.onclick = function() {
    costPerDay = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
};

//processing & calculation

function calculate() {
    totalCost = dayCounter * costPerDay;
    calculatedCost.innerHTML = totalCost;
}
