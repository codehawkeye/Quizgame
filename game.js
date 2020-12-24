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