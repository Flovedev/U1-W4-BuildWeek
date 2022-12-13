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
            "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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

let questionNumer = 1
function displayQuestion() {
    let allNode = document.querySelector('#questions-part')
    let counterNode = document.querySelector('.questions-count')
    let wrapNode = document.querySelector('.questions-container');
    let questionsNode = document.createElement('div')
    let answerContainerNode = document.createElement('div')
    let answer1Node = document.createElement('div')
    let answer2Node = document.createElement('div')
    let answer3Node = document.createElement('div')
    let answer4Node = document.createElement('div')

    for (let index = 0; index < questions.length; index++) {
        const element = questions[index];

        questionsNode.innerText = element.question
        questionsNode.classList.add('questions')
        answer1Node.innerText = element.correct_answer
        answer1Node.classList.add('answers')
        answer2Node.innerText = element.incorrect_answers[0]
        answer2Node.classList.add('answers')
        answer3Node.innerText = element.incorrect_answers[1]
        answer3Node.classList.add('answers')
        answer4Node.innerText = element.incorrect_answers[2]
        answer4Node.classList.add('answers')
        answerContainerNode.appendChild(answer1Node)
        answerContainerNode.appendChild(answer2Node)
        answerContainerNode.appendChild(answer3Node)
        answerContainerNode.appendChild(answer4Node)
        wrapNode.appendChild(questionsNode)
        wrapNode.appendChild(answerContainerNode)
        counterNode.innerHTML = `QUESTION ${questionNumer} <span>/ ${questions.length}</span>`
        // wrapNode.classList.add(`P${index}`)

        allNode.appendChild(wrapNode.cloneNode(true))
        allNode.appendChild(counterNode.cloneNode(true))

    }

    let containerCount = document.getElementsByClassName('questions-container')
    let containerNum = document.getElementsByClassName('questions-count')

    for (let index = 1; index < containerCount.length; index++) {
        const element = containerCount[index];
        element.classList.add('hide')
    }
    for (let index = 1; index < containerNum.length; index++) {
        const element = containerNum[index];
        element.classList.add('hide')
    }

}
displayQuestion()

function nextQuestion() {
    questionNumber++
}