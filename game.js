const question = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const ScoreText = document.querySelector('#score');
const progressBarfull = document.querySelector('#ProgressBarFull');

let acceptingAnswers = true
let score = 0
let questionCounter = 0 
let avalibileQuestion = []
let choiceDiv = document.querySelector('#choices');

let questions = [
    {
        question: 'Mario was originally known.......',
        choices: ["jumpman", "Superman"," Dashing Dave", "Fixit Felix"],        
         answer: "jumpman"    
    },
    {
        question: " Mario was originally a.........",
        choice1: "Janitor",
        choice2: "Carpenter",
        choice3: "Electrician",
        choice4: "Plumber",
        answer: 2,   
    },
    {
        question: "Mario's brother is named...........",
        choice1: "Wario",
        choice2: "luigi",
        choice3: "King Koopa",
        choice4: "Yoshi",
        answer: 2,    
    },

    {
        question: " Super Mario was exclusively made for ..........",
        choice1: "Nintinto",
        choice2: "Atari",
        choice3: "Playstation",
        choice4: "xBox",
        answer: 1,   
    },

    {
        question: 'Wario first appeared in .........',
        choice1: "Super Mario Bros 2",
        choice2: "Doctor Mario",
        choice3: "Donkey Kong",
        choice4: "Super Mario Land 2",
        answer: 4,    
    },

    {
        question: "When Mario eats a super mushroom he.....",
        choice1: "gains a tail",
        choice2: "can throw fire balls",
        choice3: "Grows in size",
        choice4: "gains Invincibility",
        answer: 3,   
    },

    {
        question: "The iconic main theme music to Super Mario Bro's is ...........",
        choice1: "Ground Theme",
        choice2: "Air Theme",
        choice3: "Mushroom Land Theme",
        choice4: "Carpenter's Dream Theme",
        answer: 1,    
    },

    {
        question: " A Scene from Super Mario Bro's 3 appears in what 1889 movie?",
        choice1: "Back to the future",
        choice2: "The Wizard",
        choice3: "The Gamer",
        choice4: "Foot Loose",
        answer: 2,   
    }
    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },


    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },


    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",
            
    // },
    
    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },
    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },
    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },
    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },


    // {
    //     question: 'what is...........',
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",   
    // },

    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",    
    // },
    
    // {
    //     question: "what is...........",
    //     choice: "A",
    //     choice: "B",
    //     choice: "c",
    //     choice: "D",
    //     answer: "A",
            
    // }   



]
const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    getNewQuestion()
}

getNewQuestion = () => {
    var currentQuestion = questions[questionCounter] 
    question.textContent = currentQuestion.question
    currentQuestion.choices.forEach(function (choice) {
        var choiceEL = document.createElement("button")
        choiceEL.setAttribute("value",choice)
        choiceEL.textContent = choice
        // 
        choiceEL.addEventListener('click',)
        choiceDiv.appendChild(choiceEL)
        
    })
        // if (avalibileQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //     localStorage.setItem('mostRecentScore', score)

    //     return window.location.assign('/end.html')

    // }
    // questionCounter++
    // progressText.innerText = 'Question ${questionCounter} of ${MAX_QESTIONS}'
    // ProgressBarfull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'
    

    // const questionsIndex = Math.floor(Math.random() * avalibileQuestions.length)
    // currentQuestion = avalibileQuestions[questionsIndex]
    // question.innerText = currentQuestion.question


    // choices.forEach(choice => {
    //     const number = choice.dataset['number']
    //     choice.innerText = currentQuestion['choice' + number]
        
    // })

    // avalibileQuestions.splice(questionsIndex, 1)

    // acceptingAnswers = true
    
}   

// choices.forEach(choice => {
//     choice.addEventListener('click', e => {
//         if(!acceptingAnswers) return
        
//         acceptingAnswers = false
//         const selectedChoice = e.target
//         const selectedAnswer = selectedChoice.dataset['number']
        
//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
//         if(classToApply === 'correct') {
//             incrementScore(SCORE_POINTS)
//         }
//         selectedChoice.parentElement.classList.add(classToApply)


//         setTimeout(() => {
//             selectedChoice.parentElement.classList.remove(classToApply)
//             getNewQuestion()

//         }, 1000)
//     })
// })


incrementScore = num => {
    score += num
    ScoreText.innerText = score
}

startGame()