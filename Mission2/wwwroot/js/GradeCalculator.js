// Function that calculates the grade when the calculate button is pressed
$("#calc").submit(function () {

    // Adds up all the individual assignments and multiplies by their respective weights 
    let percent = (($("#assignments").val() * 55) + ($("#group_project").val() * 5) +
        ($("#quizzes").val() * 10) + ($("#exams").val() * 20) + ($("#intex").val() * 10)) / 100;

    // Sets base grade as E
    let grade = 'E';

    //Goes through and checks the total compared to the grade cutoffs and updates the letter grade
    if (percent >= 94) {
        grade = 'A';
    }
    else if (percent >= 90) {
        grade = 'A-';
    }
    else if (percent >= 87) {
        grade = 'B+';
    }
    else if (percent >= 84) {
        grade = 'B';
    }
    else if (percent >= 80) {
        grade = 'B-';
    }
    else if (percent >= 77) {
        grade = 'C+';
    }
    else if (percent >= 74) {
        grade = 'C';
    }
    else if (percent >= 70) {
        grade = 'C-';
    }
    else if (percent >= 67) {
        grade = 'D+';
    }
    else if (percent >= 64) {
        grade = 'D';
    }
    else if (percent >= 60) {
        grade = 'D-';
    }

    //returns and overwrites the result <p> with the letter grade and the percent
    alert("Letter Grade: " + grade + "\n" + "Percent: " + percent + "%");
})