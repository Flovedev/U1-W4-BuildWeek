let btn = document.getElementById('proceedBtn');
btn.addEventListener('click', () =>{
        const checked = document.querySelector('#proceed:checked') !== null;
        if(checked){
            document.getElementById('welcomePage').style.display = "none";
            document.getElementById('questions-part').style.display = "block";
            document.getElementById('result_page_container').style.display = "none";
            let time = 20;
            window.displayQuestion();

            var timer = setInterval(function () {
                if (time > -1) {
                    console.log(time)
                    // time = time <= 0 ? 20 : time;
                    time--;
                    timerNumber.textContent = time;
                }
              
                if (time === -1) {
                  // changing the question when time is up
                  time = 20;
                  nextQuestion();
                }
              
                // time = 20;
                // timerNumber.textContent = time;
              
                // nextQuestion();
              
                if (removeIndex === questionsArray.length) {
                  document.getElementById("questions-part").style.display = "none";
                  document.getElementById("result_page_container").style.display = "flex";
                  clearInterval(timer);
                }
              }, 1000);
        }
})
