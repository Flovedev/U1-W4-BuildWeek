function selectedAnswer(eventData) {
    let clicledAnswer = eventData.target
    let previousSelected = document.querySelector('.selected-answer')

    if (previousSelected !== null) {
        previousSelected.classList.remove('selected-answer')
    }
    clicledAnswer.classList.toggle('selected-answer')
}