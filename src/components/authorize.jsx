import React,{useState, useCallback, useEffect} from 'react'
import './authorize.css'

const questions = [
  {question:"Who is the biggest Non?", answer:"non admin"},
  {question:"What is the rating of W Game?", answer:"infinity"},
  {question:"Who is the best girl?", answer:"your mom"},
  {question:"W Game is the best game?", answer:"1"},
  {question:"Will Ibrahim go to NUST?", answer:"100%"},
  {question:"Who is the captain of Non-FC?", answer:"undefined"},
  {question:"Who is coming in 2 minutes?", answer:"mehroz bhai"},
  {question:"Which is the best version of W Game?", answer:"yet to come"}
  // {question:"", answer:""}
];


function Authorize({displayFun, setAuthorizeUser}) {
  const [query,setQuery] = useState("");
  const [answer,setAnswer] = useState("");


  const hidePopup = ()=>{
    document.querySelector('.authorize-popup-div').classList.add('hide-it');
    displayFun();
  }

  const renderQuestion =useCallback(() => {
    const index = Math.floor(Math.random() * questions.length);
    setQuery(questions[index].question);
    setAnswer(questions[index].answer);
  },[query, setQuery]);


  const verifyAnswer = ()=>{
    const reply = document.querySelector('.answer-input-ele').value;
    if(reply==answer){
      document.querySelector('.answer-input-ele').value="";
      setAuthorizeUser(true);
      hidePopup();
    }
    else{
      document.querySelector('.answer-input-ele').value = "";
      document.querySelector('.error-div').innerHTML="it seems like you are not a jeo user*"
      renderQuestion();
      setTimeout(()=>{
        document.querySelector('.error-div').innerHTML = "";
      },4000)
    }
  }
   
  useEffect(() => {
    renderQuestion();
  }, []); 

  

  return (
    <>
      <div className='authorize-popup-div'>
      
        <div className="wrapper-div">
          <div className='upper-div'>
            <div className='write-div'>Are you really a Jeo User?</div>
            <div className="cancel-div" onClick={hidePopup}><span className='span-s' >X</span></div>
          </div>

          <div className='question-div'>
            <p>Question: </p>
            <input type="text" readOnly value={query}/>
          </div>
          <div className='answer-div'>
            <p>Answer:</p>
            <input type="text" placeholder='write your answer' className='answer-input-ele'/>
          </div>
        </div>

        <div className='error-div'>

        </div>
        <div className="btn-div">
          <button className='check-btn' onClick={verifyAnswer}>Verify Answer</button>
        </div>


      </div>
    </>
  )
}

export default Authorize
