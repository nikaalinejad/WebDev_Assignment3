/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

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

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

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

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

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

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.onclick = function() { 
    costPerDay = 20;
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    calculate();
};

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.onclick = function() {
    costPerDay = 35;
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    calculate();
};

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    totalCost = dayCounter * costPerDay;
    calculatedCost.innerHTML = totalCost;
}
