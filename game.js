const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorall('.choice-text'));
const progressText = document.querySelector('#ProgressText');
const ScoreText = document.querySelector('#score');
const ProgressBarfull = document.querySelector('#ProgressBarFull');

let currentQuestion = { }
let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let avalibileQuestion = []

let question = [
    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },
    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },
    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },
    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },


    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },


    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",
            
    },
    
    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },
    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },
    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },
    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },


    {
        question: 'what is...........',
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",   
    },

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",    
    },
    

    {
        question: "what is...........",
        choice: "A",
        choice: "B",
        choice: "c",
        choice: "D",
        answer: "A",
            
    }   



]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    avalibileQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (avalibileQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.asssign('/end.html')

    }
    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QESTIONS}'
    ProgressBarfull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
    

    const questionsIndex = Math.floor(Math.random() * avalibileQuestions.length)
    currentQuestion = avalibileQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['number']
        choice.innerText = currentQuestion['choice' + number]
        
    })

    avalibileQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
    
}   

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return
        
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)


        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})


incrementScore = num => {
    score += num
    ScoreText.innerText = score
}

startGame()