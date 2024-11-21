import React, { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Leo Tolstoy"],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean",
  },
  {
    id: 5,
    question: "What is the boiling point of water at sea level in Celsius?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    id: 6,
    question: "Which country is famous for the Great Wall?",
    options: ["Japan", "China", "India", "South Korea"],
    correctAnswer: "China",
  },
  {
    id: 7,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    id: 8,
    question: "Which element has the chemical symbol 'O'?",
    options: ["Oxygen", "Gold", "Osmium", "Iron"],
    correctAnswer: "Oxygen",
  },
  {
    id: 9,
    question: "Who painted the 'Mona Lisa'?",
    options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 10,
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    correctAnswer: "Nile River",
  },
];


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle submitting the answer
  const handleSubmitAnswer = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  // Restart the quiz
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-indigo-700">Quiz App</h1>

        {!showResults ? (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {currentQuestion.question}
            </h2>
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-3 px-4 border rounded-md shadow-sm text-left ${
                    selectedAnswer === option ? "bg-indigo-500 text-white" : "bg-white text-gray-700"
                  } hover:bg-indigo-600 hover:text-white`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
              onClick={handleSubmitAnswer}
              disabled={!selectedAnswer}
            >
              {currentQuestionIndex < quizQuestions.length - 1
                ? "Next Question"
                : "Submit and View Results"}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Quiz Results</h2>
            <p className="text-lg text-gray-700">
              You scored {score} out of {quizQuestions.length}.
            </p>
            <button
              className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
              onClick={handleRestartQuiz}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
