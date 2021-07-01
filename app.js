const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const paragraph =document.querySelector('.hide_h1')
const quiz =document.querySelector('.hide_p')
const controls=document.querySelector('.controls')
const list=document.querySelector('.input_name')
const inputName=document.querySelector('.list')
const output=document.querySelector('.output')

let counter =0;// to count the number of equation
let score =0; // to evaluate the score
let shuffledQuestions, currentQuestionIndex 

startButton.addEventListener('click', startGame)//when he click in start btn will excute this function
nextButton.addEventListener('click', () => { //when click in next btn will make two things ,
  //first will increase currentQuestion +1,and call setNextQuestion function
  currentQuestionIndex++
 
  setNextQuestion() // to show the next question
})

function startGame() {
  //hide for all content in thr first page and move to show the questions
  startButton.classList.add('hide')
  paragraph.classList.add('hide')
  quiz.classList.add('hide')
  list.classList.add('hide')
  inputName.classList.add('hide')

  controls.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5) //we chose a random number between zero and one,and we have 
  //shuffled question array
  currentQuestionIndex = 0 //we start with first question in index 0
  questionContainerElement.classList.remove('hide')//to show the question div
  setNextQuestion()//to show the first equation
}

function setNextQuestion() {
  resetState()//this function remove the text inner btn in html and put instead them answer.text form questions array
  showQuestion(shuffledQuestions[currentQuestionIndex])//show a question form random array shuffledQuestions of index to this question
  if(counter<=9){
    output.innerHTML =counter++ + '/10';
  
    
  }else{
    //that mean the question ends,so i will to show the score
    //the first thing i do i return the controld div and give it a background color
    counter=0;
    controls.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    output.classList.add('hide')
   // controls.style.background="#B281A2"
    const finalScore= document.createElement('div') //create new div for score
    controls.appendChild(finalScore)//put it inner the controls div
    finalScore.innerHTML="You score is"+" " + score; //put the score inner the new div 
    finalScore.classList.add('score')//add to the new div finalScore class for the style
  }
  
}

function showQuestion(question) {
  questionElement.innerText = question.question //show the question in the page
  question.answers.forEach(answer => {//will move loop of the answer in the questions array
    const button = document.createElement('button')//and create nre button 
    
    button.innerText = answer.text//put inner the new btn the answer text 
    button.classList.add('btn') //add class for new button for style

    if (answer.correct) {//if the answer is true
      button.dataset.correct = answer.correct //will add dataset as attribute in the button 
    }
    button.addEventListener('click', selectAnswer)//when the user click in button will excute selectAnswer function
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
 
  nextButton.classList.add('hide') //that mean i in new question so we hide the next btn
  while (answerButtonsElement.firstChild) { //while loop in 4 answers will remove the Anwser 1 in html
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target //the button that we selected
  const correct = selectedButton.dataset.correct //put inner it the dataset for this btn
 
  setStatusClass(document.body, correct)//to know the vlaue of dataset will call function setStatusClass

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')

  } else {
    
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
 
  if (correct) {
    element.classList.add('correct')
    //if coorect if true will increase the score
    score++
  
   
  } else {
    element.classList.add('wrong')
    
  }
}

const questions = [ //array of object that contain all equation
  {
    question: 'Which is the largest ocean in the world??',
    answers: [
      { text: 'alhadi Ocean', correct: true },
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Arctic Ocean', correct: false }
    ]
  },
  {
    question: 'Who is the first Arab team to reach the World Cup??',
    answers: [
      { text: 'Eypt', correct: true },
      { text: 'Morocco', correct: false },
      { text: 'Algeria', correct: false },
      { text: 'Tunisia', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'NO', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, {
    question: 'What is 3 * 3?',
    answers: [
      { text: '6', correct: false },
      { text: '9', correct: true },
      { text: '11', correct: false },
      { text: '20', correct: false },
    ]
  }, {
    question: 'What is 5*5 ?',
    answers: [
      { text: '25', correct: true },
      { text: '35', correct: false },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, {
    question: 'What is 4 * 4?',
    answers: [
      { text: '6', correct: false },
      { text: '22', correct: false },
      { text: '55', correct: false },
      { text: '16', correct: true },
    ]
  }, {
    question: 'What is 6 * 6?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '55', correct: false },
      { text: '36', correct: true },
    ]
  }, {
    question: 'What is 1 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '2', correct: true },
      { text: '55', correct: false },
      { text: '10', correct: false },
    ]
  }, 
]











