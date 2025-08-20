let currentQuestion = 0;
let score = 0;
let selectedIndex = null;
let correctCount = 0;
let incorrectCount = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("submitBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionNumberEl = document.getElementById("questionNumber");
const totalQuestionsEl = document.getElementById("totalQuestions");
const correctCountEl = document.getElementById("correctCount");
const incorrectCountEl = document.getElementById("incorrectCount");

let quiz = shuffleQuiz([...awsQuiz]);
totalQuestionsEl.textContent = quiz.length;

function shuffleQuiz(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  const q = quiz[currentQuestion];
  questionNumberEl.textContent = currentQuestion + 1;
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  feedbackEl.textContent = "";
  selectedIndex = null;


const categoryEl = document.createElement("div");
categoryEl.textContent = `📂 Category: ${quiz[currentQuestion].category}`;
categoryEl.style.fontSize = "14px";
categoryEl.style.marginBottom = "10px";
questionEl.innerHTML = "";
questionEl.appendChild(categoryEl);
questionEl.appendChild(document.createTextNode(quiz[currentQuestion].question));


  q.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.onclick = () => selectChoice(index, li);
    choicesEl.appendChild(li);
  });

  submitBtn.style.display = "inline-block";
  nextBtn.style.display = "none";
}

function selectChoice(index, li) {
  selectedIndex = index;
  Array.from(choicesEl.children).forEach((el) => {
    el.classList.remove("selected");
  });
  li.classList.add("selected");
}

submitBtn.onclick = () => {
  if (selectedIndex === null) {
    feedbackEl.textContent = "Please select an answer!";
    return;
  }

  const correctAnswer = quiz[currentQuestion].answer;
  const selectedLi = choicesEl.children[selectedIndex];

  if (selectedIndex === correctAnswer) {
    selectedLi.classList.add("correct");
    feedbackEl.textContent = "✅ Correct!";
    score += 1;
    correctCount += 1;
  } else {
    selectedLi.classList.add("incorrect");
    choicesEl.children[correctAnswer].classList.add("correct");
    feedbackEl.textContent = "❌ Incorrect!";
    incorrectCount += 1;
  }

  scoreEl.textContent = `Score: ${score}`;
  correctCountEl.textContent = correctCount;
  incorrectCountEl.textContent = incorrectCount;

  Array.from(choicesEl.children).forEach((el) => {
    el.onclick = null;
  });

const explanationText = quiz[currentQuestion].explanation;
const explanationEl = document.createElement("div");
explanationEl.textContent = `💡 Explanation: ${explanationText}`;
explanationEl.style.marginTop = "10px";
explanationEl.style.fontStyle = "italic";
feedbackEl.appendChild(explanationEl);

  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
};

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
};

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;
  correctCount = 0;
  incorrectCount = 0;
  quiz = shuffleQuiz([...awsQuiz]);
  scoreEl.textContent = "Score: 0";
  correctCountEl.textContent = "0";
  incorrectCountEl.textContent = "0";
  restartBtn.style.display = "none";
  loadQuestion();
};

function showFinalScore() {
  questionEl.textContent = "🎉 Quiz Complete!";
  choicesEl.innerHTML = "";
  feedbackEl.textContent = `You scored ${score} out of ${quiz.length}.`;
  submitBtn.style.display = "none";
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

// Start the quiz
loadQuestion();
