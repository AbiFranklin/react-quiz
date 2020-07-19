import React from 'react';
import QuestionCard from './Components/QuestionCard';
 
const App = () => {
  const startTrivia = async() => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  
  const nextQuestion = () => {};

  return (
  <div className="App">
    <h1>General Knowledge Quiz</h1>
    <h3>Build with React & TS by Abi Franklin</h3>
    <button className="start" onClick={startTrivia}>
      Start Quiz
    </button>
    <br/>
    <QuestionCard />
    <br />
    <span>Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Paweł Czerwiński</a> on <a href="https://unsplash.com/t/textures-patterns?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
  </div>
  );
}

export default App;
