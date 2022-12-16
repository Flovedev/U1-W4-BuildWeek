let time = 20;

let btn = document.getElementById("proceedBtn");
btn.addEventListener("click", () => {
  const checked = document.querySelector("#proceed:checked") !== null;
  if (checked) {
    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("questions-part").style.display = "block";
    document.getElementById("result_page_container").style.display = "none";

    time = 20;

    window.displayQuestion();

    localStorage.setItem("startTime", timer);

    var timer = setInterval(function () {
      if (time > -1) {
        time--;

        let timerNumber = document.getElementById("timer-number");
        timerNumber.textContent = time;
      }

      if (time === -1) {
        // changing the question when time is up
        time = 20;
        nextQuestion();
      }

      if (removeIndex === questionsArray.length) {
        document.getElementById("questions-part").style.display = "none";
        document.getElementById("result_page_container").style.display = "flex";
        time = -5;
        // ! setting the timer to -5 breaks timer code so that it will stop working.
        // ! "-5" is not a specific number. I just used it because timer won't be equals
        // ! -5 anytime and there is nothing to be triggered when time equals to -5. :)
      }
    }, 1000);
  }
});
