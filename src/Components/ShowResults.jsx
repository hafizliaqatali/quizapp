import React from 'react'

function ShowResults(props) {
  return (
    <>
    <div className='show-score'>
        {props.score === props.totalScore && (
          <>
          <div className="congratulations">
         <p>Congratulation's</p>
          </div>
          </>
        )} <br />
         Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
        
       

    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
      
    </>
  )
}

export default ShowResults
