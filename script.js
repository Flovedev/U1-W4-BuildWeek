// Questions

const questions = [
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
            "Central Process Unit",
            "Computer Personal Unit",
            "Central Processor Unit",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
            "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
            "Ice Cream Sandwich",
            "Jelly Bean",
            "Marshmallow",
        ],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
    },
    {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
    },
    {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
            "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
    },
]

let totalScore = 0


// function selectedAnswer(eventData) {
//     let clicledAnswer = eventData.target
//     let previousSelected = document.querySelector('.selected-answer')

//     if (previousSelected !== null) {
//         previousSelected.classList.remove('selected-answer')
//     }
//     clicledAnswer.classList.add('selected-answer')
// }


let questionNumber = 1
function displayQuestion() {

    let wrapNode = document.querySelector('.questions-container');
    let counterNode = document.querySelector('.questions-count')



    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];
        let questionsNode = document.createElement('div')
        questionsNode.classList.add('questions')
        questionsNode.innerText = element.question
        let answerContainerNode = document.createElement('div')
        let answer = element.incorrect_answers;
        let allNode = document.createElement('div')
        allNode.classList.add('question-answer-container')
        if (index !== 0) {
            allNode.classList.add('hide')
        }
        let correctAnswer = questions[index].correct_answer
        answer.push(element.correct_answer)
        answer.sort(() => 0.5 - Math.random())


        for (let i = 0; i < answer.length; i++) {
            let answerNode = document.createElement('div');

            answerNode.innerText = answer[i];
            answerNode.classList.add('answers');
            // answerNode.addEventListener('click', nextQuestion);
            answerContainerNode.appendChild(answerNode);
            answerNode.addEventListener('click', (event) => {
                if (event.target.innerText === correctAnswer) {
                    totalScore += 1
                }
                nextQuestion()
            });
            answerNode.addEventListener('change', nextQuestion);
        }
        allNode.appendChild(questionsNode)
        allNode.appendChild(answerContainerNode)
        wrapNode.appendChild(allNode)


        counterNode.innerHTML = `QUESTION ${questionNumber} <span>/ ${questions.length}</span>`

        
    }
    
    // let containerCount = document.getElementsByClassName('questions-container')
    // let containerNum = document.getElementsByClassName('questions-count')
    
    
    
}

displayQuestion() //add event listener 

let questionsArray = document.getElementsByClassName(
    "question-answer-container"
);

// TIMER

let timeBackwards = document.getElementById("timer-number");
let time = 20;

timeBackwards.textContent = time;

let removeIndex = -1;

setInterval(function () {
    time = --time <= 0 ? 20 : time;
    // time--

    timeBackwards.textContent = time;

    if (time === 1) {
        // changing the question when time is up
        removeIndex++;
        questionsArray[removeIndex].classList.toggle("hide");
        time = 20 + 1;
        nextQuestion()
    }

    if (time === 21) {
        questionsArray[removeIndex + 1].classList.toggle("hide");
        
    }

    if (removeIndex + 1 === questionsArray.length) {
        document.getElementById("questions-part").style.display = "none";
        document.getElementById("result_page_container").style.display = "flex";
      } 
    
}, 1000);

function nextQuestion() {

    
    if (questions.length > questionNumber) {
        
        questionNumber++;
        document.querySelector('.questions-count').innerHTML = `QUESTION ${questionNumber} <span>/ ${questions.length}</span>`
            
            // makes the current question display-none, brings next question, restart the timer and animation
            time = --time <= 0 ? 20 : time;
            
            removeIndex++;
            questionsArray[removeIndex].classList.add("hide");
            questionsArray[removeIndex + 1].classList.toggle("hide");
            
            time = 20;
            timeBackwards.textContent = time;
            
            let countdownCircleCircle = document.querySelector(
                ".countdown-circle circle"
                );
                
                countdownCircleCircle.getAnimations().forEach((animation) => {
                    animation.cancel();
                    animation.play();
                });
                
            } else {
                document.getElementById("questions-part").style.display = "none";
                document.getElementById("result_page_container").style.display = "flex";
            }
    return totalScore
        
}
console.log(totalScore);




// Result page JavaScript





let totalQuestions = 10;

function showResults() {

    //creating the var for the inner text 
    let numberOfCorrectAnswers = totalScore;
    let numberOfWrongAnswers = totalQuestions - totalScore;
    
    //calculating percentage
    let percentageOfCorrectAnswers = numberOfCorrectAnswers / totalQuestions * 100;
    let percentageOfWrongAnswers = numberOfWrongAnswers / totalQuestions * 100;

    //document.querySelector("avg").setAttribute("stroke-dasharray", circleDasharray)

    //adding inner text
    document.getElementById("percentage_of_correct_answers").innerText = `${percentageOfCorrectAnswers}%`
    document.getElementById("number_of_correct_answers").innerText = `${numberOfCorrectAnswers}/${totalQuestions} questions`;

    document.getElementById("percentage_of_wrong_answers").innerText = `${percentageOfWrongAnswers}%`
    document.getElementById("number_of_wrong_answers").innerText = `${numberOfWrongAnswers}/${totalQuestions} questions`;

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
        messageWhatHappensNext.innerText = "We'll you the certificate in few mintutes. \nCheck your email (including promotions / spam folder)"
    } else {
        congratulationsOrCondolences.innerText = "We are sorry."
        messageOfSuccessOrFail.innerText = "You didn't pass the exam.";
        messageWhatHappensNext.innerText = "We'll contact you in a few minutes to send you the informations concerning your assessment interview. \nCheck your email (including promotions / spam folder)"
    }

    //appending elements to the message container
    document.getElementById("notification_for_passing").appendChild(congratulationsOrCondolences);
    document.getElementById("notification_for_passing").appendChild(messageOfSuccessOrFail);
    document.getElementById("notification_for_passing").appendChild(messageWhatHappensNext);
    console.log(totalScore);
}




let buttonToRatingNode = document.getElementById('button_to_rating');
buttonToRatingNode.addEventListener('click', () => {
    console.log("works");
    document.getElementById('result_page_container').style.display = "none";
    document.getElementById('feedback-page_content-container').style.display = "inline";

})






