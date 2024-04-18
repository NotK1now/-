const quizData = [
    {
      question: "Какой тип водорослей считается самым простым?",
      correct: "Зеленые водоросли"
    },
    {
      question: "Как называется процесс, в ходе которого водоросли используют свет для превращения воды и углекислого газа в органические вещества?",
      correct: "Фотосинтез"
    },
    {
      question: "В каком месте водоема обитают фитопланктонные водоросли?",
      correct: "В поверхностном слое воды"
    },
    {
      question: "Какой тип водорослей представляет собой основной компонент морских водорослей?",
      correct: "Красные водоросли"
    },
    {
      question: "Что такое водоросли?",
      correct: "Организмы, производящие питательные вещества с использованием света"
    },
    {
      question: "В каком типе водорослей содержится вещество альгинат, используемое в пищевой промышленности и медицине?",
      correct: "Коричневые водоросли"
    },
    {
      question: "Какой из перечисленных типов водорослей преобладает в пресных водоемах?",
      correct: "Зеленые водоросли"
    },
    {
      question: "Как называется процесс, в ходе которого водоросли используют свет для превращения воды и углекислого газа в органические вещества?",
      correct: "Фотосинтез"
    },
    {
      question: "В каком месте водоема обитают фитопланктонные водоросли?",
      correct: "В поверхностном слое воды"
    },
    {
      question: "Какой тип водорослей представляет собой основной компонент морских водорослей?",
      correct: "Красные водоросли"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const answerInput = document.getElementById("answer-input");
  const submitButton = document.getElementById("submit-btn");
  const resultElement = document.getElementById("result");
  const correctAnswerElement = document.getElementById("correct-answer");
  const correctAnswerTextElement = document.getElementById("correct-answer-text");
  const nextButton = document.getElementById("next-btn");
  
  let currentQuestionIndex = 0;
  
  function showQuestion(question) {
    questionElement.innerText = question.question;
    answerInput.value = "";
    resultElement.innerText = "";
    correctAnswerElement.style.display = "none";
    nextButton.style.display = "none";
  }
  
  function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = quizData[currentQuestionIndex].correct;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      resultElement.innerText = "Верно!";
    } else {
      resultElement.innerText = "Неверно.";
      correctAnswerTextElement.innerText = correctAnswer;
      correctAnswerElement.style.display = "block";
    }
    nextButton.style.display = "block";
  }
  
  submitButton.addEventListener("click", checkAnswer);
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      showQuestion(quizData[currentQuestionIndex]);
    } else {
      // Добавьте здесь логику для завершения викторины
    }
  });
  // Стили для кнопки "Ответить"
// Стили для кнопки "Ответить"
submitButton.style.width = "45%";
submitButton.style.padding = "15px";
submitButton.style.backgroundColor = "#007bff";
submitButton.style.color = "#fff";
submitButton.style.border = "none";
submitButton.style.borderRadius = "6px";
submitButton.style.cursor = "pointer";
submitButton.style.transition = "background-color 0.3s, transform 0.3s";
submitButton.style.fontSize = "16px";
submitButton.style.textTransform = "uppercase";
submitButton.style.marginTop = "20px";
submitButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";

// Стили для кнопки "Следующий вопрос"
nextButton.style.width = "45%";
nextButton.style.padding = "15px";
nextButton.style.backgroundColor = "#28a745";
nextButton.style.color = "#fff";
nextButton.style.border = "none";
nextButton.style.borderRadius = "6px";
nextButton.style.cursor = "pointer";
nextButton.style.transition = "background-color 0.3s, transform 0.3s";
nextButton.style.fontSize = "16px";
nextButton.style.textTransform = "uppercase";
nextButton.style.marginTop = "20px";
nextButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
nextButton.style.display = "none"; // Скрываем кнопку до следующего вопроса

// Стили для кнопки "Верно" и "Неверно"
// Стили для кнопки "Верно" и "Неверно"
resultElement.style.fontSize = "20px";
resultElement.style.fontWeight = "bold";

// Стили для текста с правильным ответом
correctAnswerTextElement.style.fontSize = "20px";
correctAnswerTextElement.style.fontWeight = "bold";
// Стили для слова "Правильный ответ"
correctAnswerElement.style.fontSize = "20px";
correctAnswerElement.style.fontWeight = "bold";

  showQuestion(quizData[currentQuestionIndex]);