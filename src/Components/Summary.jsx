import quizComplete from "../assets/quiz-complete.png";
import Questions from "../questions.js";

export default function Summary({ userAnswerState }) {
    const skippedAnswers=userAnswerState.filter((answer)=>answer===null);
    const correctAnswers=userAnswerState.filter((answer, index)=>answer===Questions[index].answers[0]);

    const skippedAnswerPercentage=Math.round((skippedAnswers.length / userAnswerState.length)*100);
    const correctAnswerPercentage=Math.round((correctAnswers.length / userAnswerState.length)*100);
    const wrongAnswersPercentage=100 - skippedAnswerPercentage - correctAnswerPercentage;
  return (
    <div id="summary">
      <img src={quizComplete} alt="Quiz complete image" />
      <h2>Quiz Complete</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPercentage}%</span>
          <span className="text">Answred correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercentage}%</span>
          <span className="text">Answered incorrectly</span>
        </p>
          </div>
        <ol>
          {userAnswerState.map((answer, index) => {
            let cssClass = "user-answer";
            if (answer == null) {
              cssClass += " skipped";
            } else if (answer == Questions[index].answers[0]) {
              cssClass += " correct";
            } else {
              cssClass += " wrong";
            }
            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{Questions[index].text}</p>
                <p className={cssClass}>{answer ?? "Skipped"}</p>
              </li>
            );
          })}
        </ol>
    </div>
  );
}
