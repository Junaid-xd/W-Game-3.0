import React from 'react'
import './Btn-information.css'

function BtnInformation({names, pikachu, emojis, images, phrases ,setInfoDisplay, limit}) {


  const closeInformationPopup = ()=>{
    setInfoDisplay(false);
  }

  return (
    <div className="info-main-div">

      <div className="top-div">
        <div className="heading-div">
          New Buttons Information
        </div>
        <div className='info-close-btn-div'>
          <button className='info-close-btn' onClick={closeInformationPopup}>X</button>
        </div>
      </div>


     <div className="buttons-info-wrapper">

        {/* <div className="random-name-div">
          <div className="btn-name"><p>Pick Random Name :</p></div>
          <div className='info-content-div'>
            <p>This button picks a random name among {names} names against a property entered by the user.</p>
          </div>
        </div>

        <div className="pikachu-div">
          <div className="btn-name"><p>Pikachu :</p></div>
          <div className='info-content-div'>
            <p>This button picks a random name among {pikachu} of us against a property entered by the user.</p>
          </div>
        </div>

        <div className="random-emoji-div">
          <div className="btn-name"><p>Pick Random Emoji :</p></div>
          <div className='info-content-div'>
            <p>This button picks a random emoji among {emojis} emojis against a property entered by the user.</p>
          </div>
        </div>

        <div className="random-image-div">
          <div className="btn-name"><p>Pick Random Image :</p></div>
          <div className='info-content-div'>
            <p>This button picks a random image among {images} images against a property entered by the user.</p>
          </div>
        </div> */}

        <div className="random-phrase-div">
          <div className="btn-name"><p>Pick Random Phrase :</p></div>
          <div className='info-content-div'>
            <p>This button expects user to enter one or two names as property, and then this will pick a random phrase among {phrases} phrases against those names.</p>
          </div>
        </div>

        <div className="cook-div">
          <div className="btn-name"><p>Let W Game Cook :</p></div>
          <div className='info-content-div'>
            <p>This button randomly choose a phrase among all {phrases} phrases. It will then look if the phrase fits one name or two, and then choose random name or names (depending on the phrase requirement) among all {names} names. At the end, it also choose a random emoji among all {emojis} emojis and then show the entire sentence to user. As this needs to cook so much, so it has a limit of {limit}.</p>
          </div>
        </div>
     </div>

    </div>
  )
}

export default BtnInformation
