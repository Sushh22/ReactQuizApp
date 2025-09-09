import QuizTimer from "./QuizTimer.jsx";
import Answers from "./answers.jsx";
import Questions from "../questions.js";
import { useState } from "react";

export default function Question({
  index,
  onSkipAnswer,
  onSelectAnswer,
}) {
  const [answerState, setAnswerState] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
let timer=10000;
if(answerState.selectedAnswer){
  timer=1000;
}
if(answerState.isCorrect!=null){
  timer=2000;
}
  function handleAnswerSelect(answer) {
    setAnswerState({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswerState({
        selectedAnswer: answer,
        isCorrect: Questions[index].answers[0]===answer
      })
      setTimeout(()=>{
        onSelectAnswer(answer);
      },2000)
    }, 1000);
  }
let rightAnswer='';
if(answerState.selectedAnswer && answerState.isCorrect!==null){
  rightAnswer=answerState.isCorrect ? 'correct' : 'wrong';
}else if(answerState.selectedAnswer){
  rightAnswer='answered';
}
  return (
    <div id="question">
      <QuizTimer key={timer} timeout={timer} onTimeout={answerState.selectedAnswer=='' ? onSkipAnswer : null} mode={rightAnswer} />
      <h2>{Questions[index].text}</h2>
      <Answers
        answers={Questions[index].answers}
        selectedAnswer={answerState.selectedAnswer}
        answerState={rightAnswer}
        onSelect={handleAnswerSelect}
      />
    </div>
  );
}
