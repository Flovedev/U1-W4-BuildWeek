let totalScore = 6;
let totalQuestions = 10;

function showResults() {

    //creating the var for the inner text 
    let numberOfCorrectAnswers = totalScore;
    let numberOfWrongAnswers = totalQuestions - totalScore;

    //calculating percentage
    let percentageOfCorrectAnswers = numberOfCorrectAnswers/totalQuestions * 100;
    let percentageOfWrongAnswers = numberOfWrongAnswers/totalQuestions * 100;


    //adding inner text
    document.getElementById("percentage_of_correct_answers").innerText = `${percentageOfCorrectAnswers}%`
    document.getElementById("number_of_correct_answers").innerText = `${numberOfCorrectAnswers}/${totalQuestions} questions`;
    
    document.getElementById("percentage_of_wrong_answers").innerText = `${percentageOfWrongAnswers}%`
    document.getElementById("number_of_wrong_answers").innerText = `${numberOfWrongAnswers}/${totalQuestions} questions`;

    //creating the elements for the central message
    let congratulationsOrCondolences = "";
    let messageOfSuccessOrFail = "";
    let messageWhatHappensNext = "";

    //adding classes to the elements
    congratulationsOrCondolences.classList.add("congratulations_or_condolences");
    messageOfSuccessOrFail.classList.add("message_of_success_or_failure");
    messageWhatHappensNext.classList.add("message_what_happens_next");

    //modifying inner texts of elements
    if (percentageOfCorrectAnswers >= 60) {
        congratulationsOrCondolences.innerText = "Congratulations!";
        messageOfSuccessOrFail.innerText = "You passed the exam.";
        messageWhatHappensNext.innerText = "We'll you the certificate in few mintutes. Check your email (including promotions / spam folder)"
    } else {
        congratulationsOrCondolences.innerText = "We are sorry."
        messageOfSuccessOrFail.innerText = "You didn't passed the exam.";
        messageWhatHappensNext.innerText = "We'll contact you in a few minutes"
    }

    //appending elements to the message container
    document.getElementById("correct_answer_container").appendChild("congratulationsOrCondolences");
    document.getElementById("correct_answer_container").appendChild("messageOfSuccessOrFail");
    document.getElementById("correct_answer_container").appendChild("messageWhatHappensNext");

}