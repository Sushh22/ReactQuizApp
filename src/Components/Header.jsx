import reactLogo from '../assets/quiz-logo.png'


export default function Header(){
    return(
        <header>
            <img src={reactLogo} alt="Quiz logo image" />
            <h1>ReactQuiz</h1>
        </header>
    )
}