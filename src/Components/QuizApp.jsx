import React, { useState } from 'react'
import { QuizData } from './QuizData'
import ShowResults from './ShowResults';

function QuizApp() {
  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [currentOption,setCurrentOption] = useState(0);
  const [score ,setScore] = useState(0);
  const [showResult , setShowResult] = useState(false);


  function Next(){
    currentScore();
    if( currentQuestion< QuizData.length -1){
      setCurrentQuestion(currentQuestion + 1);
      setCurrentOption(0);
    }else{
      setShowResult(true)
    }
  }
   function currentScore(){
    if(currentOption === QuizData[currentQuestion].answer){
      setScore(score+1)
    }
   }
   const rest = ()=>{
    setCurrentQuestion(0);
    setCurrentOption(0);
    setShowResult(false);
    setScore(0)
   }
   

  return (
    <>
     
     <div className="container">
     <h1> Quiz App</h1>

    
        <div className="container-items">
          {showResult? (
            <ShowResults totalScore={QuizData.length} score={score} tryAgain={rest}/>
          ):(
           <> 
           <div className="questions">
              <h1>{`${currentQuestion + 1}: ${QuizData[currentQuestion].question}`}</h1>
            </div>
       <div className="btn">
        {QuizData[currentQuestion].options.map((option , index)=>{
          return(
            <>
           <button className={`${currentOption === index+1? "checked":null}`} key={index} onClick={(e)=>{
            setCurrentOption(index+1);
            
           } }>{option}</button>
            </>
          )
        })}
       </div>
       <div className="next-btn">
        <button onClick={Next}>Next</button>
       </div>
       </>    
       )}
        </div>

     </div>
    </>
  )
}

export default QuizApp
