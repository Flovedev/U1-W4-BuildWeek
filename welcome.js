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
        console.log(time);
        // time = time <= 0 ? 20 : time;
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
      }
    }, 1000);
  }
});
