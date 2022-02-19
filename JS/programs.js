let allPrograms = document.querySelectorAll(".pricing-table-wrapper");
let workoutSplitPrograms = document.querySelectorAll(".workout-split");
let mealPlanPrograms = document.querySelectorAll(".meal-plan");
let fullCoachingPrograms = document.querySelectorAll(".full-coaching");

let programSelector = document.querySelector("#programs-categories");


function hideAllPrograms() {
    for (let i = 0; i < allPrograms.length; i++) {
        allPrograms[i].style.display = "none";
    }
};

function showAllPrograms() {
    for (let i = 0; i < allPrograms.length; i++) {
        allPrograms[i].style.display = "block";
    }
};

function showMealPlans() {
    for (let i = 0; i < allPrograms.length; i++) {
        mealPlanPrograms[i].style.display = "block";
    }
};

function showWorkoutSplit() {
    for (let i = 0; i < allPrograms.length; i++) {
        workoutSplitPrograms[i].style.display = "block";
    }
};

function showFullCoachingPlans() {
    for (let i = 0; i < allPrograms.length; i++) {
        fullCoachingPrograms[i].style.display = "block";
    }
};

function displayPrograms() {
    let programValue = programSelector.value;
    console.log(programValue);

    hideAllPrograms();

    if (programValue === "meal-plans") {
        showMealPlans();
  } else if (programValue === "workout-splits") {
        showWorkoutSplit();
    } else if (programValue === "1-1-coaching") {
        showFullCoachingPlans();
    } else if (programValue === "all") {
        showAllPrograms();
    }
};

programSelector.addEventListener("change", displayPrograms);