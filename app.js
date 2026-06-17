const questions = [
  {
    question: "What is the national dish of Japan?",
    answers: ["Ramen", "Curry", "Sushi", "Takoyaki"],
    correctAnswerIndex: 2,
  },
  {
    question: "What were the small pockets in jeans originally designed to hold?",
    answers: ["Phones", "Pocket Watches", "Dog Tags", "Loose Change"],
    correctAnswerIndex: 1,
  },
  {
    question: "What is the tallest breed of dog?",
    answers: ["Anatolian Shepherd", "Scottish Deerhound", "Great Dane", "Irish Wolfhound"],
    correctAnswerIndex: 3,
  },
];

const question = document.getElementById("question");
const button1 = document.getElementById("answer1");
const button2 = document.getElementById("answer2");
const button3 = document.getElementById("answer3");
const button4 = document.getElementById("answer4");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;

const answerButtons = [button1, button2, button3, button4];

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  question.textContent = currentQuestion.question;
  feedback.textContent = "";

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.disabled = false;
  });
}

function checkAnswer(event) {
  const selectedIndex = answerButtons.indexOf(event.target);
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.correctAnswerIndex) {
    feedback.textContent = "Correct Answer!";
  } else {
    feedback.textContent = "Incorrect.";
  }

  answerButtons.forEach((button) => {
    button.disabled = true;
  });
}

answerButtons.forEach((button) => {
  button.addEventListener("click", checkAnswer);
});

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    question.textContent = "Quiz Completed!";
    feedback.textContent = "You finished the quiz.";
    nextBtn.disabled = true;

    answerButtons.forEach((button) => {
      button.textContent = "";
      button.disabled = true;
    });
  }
});

loadQuestion();
