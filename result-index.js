

// let correctAnswers = window.localStorage.getItem('newScore')
let totalQuestions = 10;

function showResults(result) {

    //creating the var for the inner text 
    let numberOfCorrectAnswers = result;
    let numberOfWrongAnswers = totalQuestions - result;

    //calculating percentage
    let percentageOfCorrectAnswers = numberOfCorrectAnswers / totalQuestions * 100;
    let percentageOfWrongAnswers = numberOfWrongAnswers / totalQuestions * 100;

//     //document.querySelector("avg").setAttribute("stroke-dasharray", circleDasharray)

//     //adding inner text
//     document.getElementById("percentage_of_correct_answers").innerText = `${percentageOfCorrectAnswers}%`
//     document.getElementById("number_of_correct_answers").innerText = `${numberOfCorrectAnswers}/${totalQuestions} questions`;

//     document.getElementById("percentage_of_wrong_answers").innerText = `${percentageOfWrongAnswers}%`
//     document.getElementById("number_of_wrong_answers").innerText = `${numberOfWrongAnswers}/${totalQuestions} questions`;

//     //creating the elements for the central message
//     let congratulationsOrCondolences = document.createElement("p");
//     let messageOfSuccessOrFail = document.createElement("p");
//     let messageWhatHappensNext = document.createElement("p");

//     //adding classes to the elements
//     congratulationsOrCondolences.classList.add("congratulations_or_condolences");
//     messageOfSuccessOrFail.classList.add("message_of_success_or_failure");
//     messageWhatHappensNext.classList.add("message_what_happens_next");

//     //modifying inner texts of elements
//     if (percentageOfCorrectAnswers >= 60) {
//         congratulationsOrCondolences.innerText = "Congratulations!";
//         messageOfSuccessOrFail.innerText = "You passed the exam.";
//         messageWhatHappensNext.innerText = "We'll you the certificate in few mintutes. \nCheck your email (including promotions / spam folder)"
//     } else {
//         congratulationsOrCondolences.innerText = "We are sorry."
//         messageOfSuccessOrFail.innerText = "You didn't pass the exam.";
//         messageWhatHappensNext.innerText = "We'll contact you in a few minutes to send you the informations concerning your assessment interview. \nCheck your email (including promotions / spam folder)"
//     }

//     //appending elements to the message container
//     document.getElementById("notification_for_passing").appendChild(congratulationsOrCondolences);
//     document.getElementById("notification_for_passing").appendChild(messageOfSuccessOrFail);
//     document.getElementById("notification_for_passing").appendChild(messageWhatHappensNext);


}

// showResults();


// let buttonToRatingNode = document.getElementById('button_to_rating');
// buttonToRatingNode.addEventListener('click', () => {
//     console.log("works");
//     document.getElementById('result_page_container').style.display = "none";
//     document.getElementById('feedback-page_content-container').style.display = "inline";

// })






