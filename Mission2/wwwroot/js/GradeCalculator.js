// Checks to see if there are no errors and if not shows the stored grade value
if (typeof (Storage) !== "undefined" && sessionStorage.getItem('result') && $("#errors ul li").text() === "") {
    $("#result").html(sessionStorage.getItem('result'));
}

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

    $("#result").html("Letter Grade: " + grade + "\n" + "Percent: " + percent + "%");

    // Storing the data in the sessionStorage so that when the form submits and refreshes the page and validates
    // using models, I still have access to the grade calculated
    sessionStorage.setItem("result", ("Letter Grade: " + grade + "\n" + "Percent: " + percent + "%"));
})