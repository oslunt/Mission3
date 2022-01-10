$("#calc").click(function () {
    let percent = (($("#assignments").val() * 55) + ($("#group_project").val() * 5) +
        ($("#quizzes").val() * 10) + ($("#exams").val() * 20) + ($("#intex").val() * 10)) / 100;
    let grade = 'E';
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
    //alert("Letter Grade: " + grade + "\n" + "Percent: " + percent + "%");
    $("#result").html("Letter Grade: " + grade + "\n" + "Percent: " + percent + "%");
    return false;
})