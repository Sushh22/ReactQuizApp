import { useState, useCallback } from "react";
import Questions from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  //const [answerState,setAnswerState]=useState('');
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const totalQuestions = Questions.length;


 const handleAnswerClick = useCallback(
  function handleAnswerClick(selectedAnswer) {
  //  setAnswerState('answered');
    setUserAnswers((prevUserAnswer) => {
     return [...prevUserAnswer, selectedAnswer];
     });
  });
//     setTimeout(()=>{
//       if(selectedAnswer==Questions[activeQuestionIndex].answers[0]){
//         setAnswerState('correct');
//       }else{
//         setAnswerState('wrong');
//       }
//       setTimeout(()=>{
//         setAnswerState("");
//       },2000)
//     },1000)
//   },[activeQuestionIndex]);

  const handleSkipAnswer=useCallback(()=>{handleAnswerClick(null)},[handleAnswerClick]);

  if (totalQuestions === activeQuestionIndex) {
    return (
    <Summary userAnswerState={userAnswers}/>
    );
  }


  return (
    <div id="quiz">
        <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSkipAnswer={handleSkipAnswer}
        onSelectAnswer={handleAnswerClick}
       />
    </div>
  );
}
