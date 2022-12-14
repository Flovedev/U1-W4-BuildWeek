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

function selectedAnswer(eventData) {
    let clicledAnswer = eventData.target
    let previousSelected = document.querySelector('.selected-answer')

    if (previousSelected !== null) {
        previousSelected.classList.remove('selected-answer')
    }
    clicledAnswer.classList.add('selected-answer')
}


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
        answer.push(element.correct_answer)
        answer.sort(() => 0.5 - Math.random())


        for (let i = 0; i < answer.length; i++) {
            let answerNode = document.createElement('div');

            answerNode.innerText = answer[i];
            answerNode.classList.add('answers');
            // answerNode.addEventListener('click', nextQuestion());
            answerContainerNode.appendChild(answerNode);
        }

        allNode.appendChild(questionsNode)
        allNode.appendChild(answerContainerNode)
        wrapNode.appendChild(allNode)



        counterNode.innerHTML = `QUESTION ${questionNumber} <span>/ ${questions.length}</span>`

    }

    let containerCount = document.getElementsByClassName('questions-container')
    let containerNum = document.getElementsByClassName('questions-count')



}
displayQuestion()

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

    timeBackwards.textContent = time;

    if (time === 1) {
        // changing the question when time is up
        removeIndex++;
        questionsArray[removeIndex].classList.toggle("hide");
        time = 20 + 1;
    }

    if (time === 21) {
        questionsArray[removeIndex + 1].classList.toggle("hide"); // TODO: IF QUESTIONS ARE FINISHED GO TO THE RESULT PAGE
    }
}, 1000);

function nextQuestion() {
    questionNumber++;

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
}