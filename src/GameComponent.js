import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function GameComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const questions = [
    {
      id: 1,
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      id: 2,
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jeff Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      id: 3,
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'Intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      id: 4,
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      alert('the answer is correct');
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        {showScore ? (
          <Typography variant="h4" component="div">
            <div className="score-section">
              You scored {score} out of {questions.length}
            </div>
          </Typography>
        ) : (
          <>
            <Typography variant="h5" component="div">
              <div className="question-section">
                <div className="question-count">
                  <span>Question {questions[currentQuestion].id}</span>/
                  {questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
            </Typography>
            <CardActions>
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <Button
                    variant="contained"
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </Button>
                )
              )}
            </CardActions>
          </>
        )}
      </CardContent>
    </Card>
  );
}
