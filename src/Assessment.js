import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assessmentQuestions } from "./assessmentData"; // import questions
import "./Assessment.css";

const Assessment = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [weakestCategory, setWeakestCategory] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    const updated = [...answers];
    updated[currentQ] = e.target.value;
    setAnswers(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentQ < assessmentQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      calculateResults();
      setCompleted(true);
    }
  };

  const calculateResults = () => {
    let personal = 0,
      social = 0,
      thinking = 0;
    answers.forEach((ans, idx) => {
      const q = assessmentQuestions[idx];
      if (ans === q.idealAnswer) {
        if (q.category === "Personal Skills") personal++;
        if (q.category === "Social Skills") social++;
        if (q.category === "Thinking Skills") thinking++;
      }
    });
    const scores = [
      { category: "Personal Skills", score: personal },
      { category: "Social Skills", score: social },
      { category: "Thinking Skills", score: thinking },
    ];
    scores.sort((a, b) => a.score - b.score);
    setWeakestCategory(scores[0].category);
  };

  const handleUpskillClick = () => {
    if (weakestCategory === "Personal Skills") navigate("/personal");
    else if (weakestCategory === "Social Skills") navigate("/social");
    else if (weakestCategory === "Thinking Skills") navigate("/thinking");
  };

  if (completed) {
    return (
      <div className="assessment-results">
        <h2>Assessment Complete!</h2>
        <p>
          Need to improve <strong>{weakestCategory}</strong>
        </p>
        <button className="cta-button" onClick={handleUpskillClick}>
          Upskill Yourself
        </button>
      </div>
    );
  }

  const question = assessmentQuestions[currentQ];

  return (
    <div className="assessment-container">
      <h2>
        Question {currentQ + 1} of {assessmentQuestions.length}
      </h2>
      <p className="question-text">{question.question}</p>
      <form onSubmit={handleSubmit}>
        {question.options.map((opt) => (
          <div key={opt.option} className="option-item">
            <label>
              <input
                type="radio"
                name={`q${question.id}`}
                value={opt.option}
                checked={answers[currentQ] === opt.option}
                onChange={handleOptionChange}
                required
              />
              {opt.option}. {opt.text}
            </label>
          </div>
        ))}
        <button type="submit" className="cta-button">
          {currentQ === assessmentQuestions.length - 1
            ? "Finish Assessment"
            : "Next"}
        </button>
      </form>
    </div>
  );
};

export default Assessment;
