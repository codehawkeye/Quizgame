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
        question: 'Mario was originally known.......',
        choice: "Jumpman",
        choice: "Super Plumber",
        choice: "Dashing Dave",
        choice: "Fixit Felix",
        answer: "Jumpman",    
    },
    {
        question: " Mario was originally a.........",
        choice: "Janitor",
        choice: "Carpenter",
        choice: "Electrician",
        choice: "Plumber",
        answer: "Carpenter",   
    },
    {
        question: "Mario's brother is named...........",
        choice: "Wario",
        choice: "luigi",
        choice: "King Koopa",
        choice: "Yoshi",
        answer: "luigi",    
    },

    {
        question: " Super Mario was exclusively made for ..........",
        choice: "Nintinto",
        choice: "Atari",
        choice: "Playstation",
        choice: "xBox",
        answer: "Nintindo",   
    },

    {
        question: 'Wario first appeared in .........',
        choice: "Super Mario Bros 2",
        choice: "Doctor Mario",
        choice: "Donkey Kong",
        choice: "Super Mario Land 2",
        answer: "Super Mario Land 2",    
    },

    {
        question: "When Mario eats a super mushroom he.....",
        choice: "gains a tail",
        choice: "can throw fire balls",
        choice: "Grows in size",
        choice: "gains Invincibility",
        answer: "Grows in size",   
    },

    {
        question: "The iconic main theme music to Super Mario Bro's is ...........",
        choice: "Ground Theme",
        choice: "Air Theme",
        choice: "Mushroom Land Theme",
        choice: "Carpenter's Dream Theme",
        answer: "Ground Theme",    
    },

    {
        question: " A Scene from Super Mario Bro's 3 appears in what 1889 movie?",
        choice: "Back to the future",
        choice: "The Wizard",
        choice: "The Gamer",
        choice: "Foot Loose",
        answer: "The Wizard",   
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