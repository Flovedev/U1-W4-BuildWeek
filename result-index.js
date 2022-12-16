let correctAnswers = window.localStorage.getItem("newScore");
let totalQuestions = 10;

function showResults(result) {
  //creating the var for the inner text
  let numberOfCorrectAnswers = result;
  let numberOfWrongAnswers = totalQuestions - result;

  //calculating percentage
  let percentageOfCorrectAnswers =
    (numberOfCorrectAnswers / totalQuestions) * 100;
  let percentageOfWrongAnswers = (numberOfWrongAnswers / totalQuestions) * 100;

  //adding inner text
  document.getElementById(
    "percentage_of_correct_answers"
  ).innerText = `${percentageOfCorrectAnswers}%`;
  document.getElementById(
    "number_of_correct_answers"
  ).innerText = `${numberOfCorrectAnswers}/${totalQuestions} questions`;

  document.getElementById(
    "percentage_of_wrong_answers"
  ).innerText = `${percentageOfWrongAnswers}%`;
  document.getElementById(
    "number_of_wrong_answers"
  ).innerText = `${numberOfWrongAnswers}/${totalQuestions} questions`;

  //creating the elements for the central message
  let congratulationsOrCondolences = document.createElement("p");
  let messageOfSuccessOrFail = document.createElement("p");
  let messageWhatHappensNext = document.createElement("p");

  //adding classes to the elements
  congratulationsOrCondolences.classList.add("congratulations_or_condolences");
  messageOfSuccessOrFail.classList.add("message_of_success_or_failure");
  messageWhatHappensNext.classList.add("message_what_happens_next");

  //modifying inner texts of elements
  if (percentageOfCorrectAnswers >= 60) {
    congratulationsOrCondolences.innerText = "Congratulations!";
    messageOfSuccessOrFail.innerText = "You passed the exam.";
    messageWhatHappensNext.innerText =
      "We'll you the certificate in few minutes. \nCheck your email (including promotions / spam folder)";
  } else {
    congratulationsOrCondolences.innerText = "We are sorry.";
    messageOfSuccessOrFail.innerText = "You didn't pass the exam.";
    messageWhatHappensNext.innerText =
      "We'll contact you in a few minutes to send you the information concerning your assessment interview. \nCheck your email (including promotions / spam folder)";
  }

  document.getElementById(
    "percentage_of_wrong_answers"
  ).innerText = `${percentageOfWrongAnswers}%`;
  document.getElementById(
    "number_of_wrong_answers"
  ).innerText = `${numberOfWrongAnswers}/${totalQuestions} questions`;

  //appending elements to the message container
  document
    .getElementById("notification_for_passing")
    .appendChild(congratulationsOrCondolences);
  document
    .getElementById("notification_for_passing")
    .appendChild(messageOfSuccessOrFail);
  document
    .getElementById("notification_for_passing")
    .appendChild(messageWhatHappensNext);
  //creating the elements for the central message

  //adding classes to the elements
  congratulationsOrCondolences.classList.add("congratulations_or_condolences");
  messageOfSuccessOrFail.classList.add("message_of_success_or_failure");
  messageWhatHappensNext.classList.add("message_what_happens_next");
  // RESULT DONUT

  //modifying inner texts of elements
  if (percentageOfCorrectAnswers >= 60) {
    congratulationsOrCondolences.innerText = "Congratulations!";
    messageOfSuccessOrFail.innerText = "You passed the exam.";
    messageWhatHappensNext.innerText =
      "We'll you the certificate in few minutes. \nCheck your email (including promotions / spam folder)";
  } else {
    congratulationsOrCondolences.innerText = "We are sorry.";
    messageOfSuccessOrFail.innerText = "You didn't pass the exam.";
    messageWhatHappensNext.innerText =
      "We'll contact you in a few minutes to send you the information concerning your assessment interview. \nCheck your email (including promotions / spam folder)";
  }
  let blueResultDonut = document.getElementById("correct-answer-donut");

  let pixelsToBeShowed1 = ((2 * 22) / 7) * 175;
  let pixelsToBeShowed2 =
    (((2 * 22) / 7) * 175 * percentageOfWrongAnswers) / 100;

  blueResultDonut.style.strokeDashoffset = `${(pixelsToBeShowed1, pixelsToBeShowed2)
    }px`;

  blueResultDonut.style.stroke = `#00FFFF`;
}

let buttonToRatingNode = document.getElementById("button_to_rating");
buttonToRatingNode.addEventListener("click", () => {
  document.getElementById("result_page_container").style.display = "none";
  document.getElementById("feedback-page_content-container").style.display =
    "inline";
  time = -5;
});
