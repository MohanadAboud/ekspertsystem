import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Backward() {
  const [question, setQuestion] = useState('Lever spillet op til mine forventninger?')
  const [showInitialButtons, setShowInitialButtons] = useState(true)
  const navigate = useNavigate()

  const handleInitialClick = (game) => {
    setShowInitialButtons(false)
    setQuestion(`Har du lyst til at spille ${game}?`)
  }

  const handleYesClick = () => {
    if (question === 'Har du lyst til at spille UNO?') {
      setQuestion('Har lyst til at spille mod dine  venner?')
    } else if (question === 'Har lyst til at spille mod dine  venner?') {
      setQuestion('Kan lide et enkelt, nemt  og socialt spil?')
    } else if (question === 'Kan lide et enkelt, nemt  og socialt spil?') {
      navigate('/Anbefaling1')
    }
  }

  const handleNoClick = () => {
    if (question === 'Har du lyst til at spille UNO?') {
      navigate('/Anbefaling2')
    } else if (question === 'Har lyst til at spille mod dine  venner?') {
      navigate('/Anbefaling2')
    } else if (question === 'Kan lide et enkelt, nemt  og socialt spil?') {
      navigate('/Anbefaling2')
    }
  }

  return (
    <div className="backward_container">
      <div className="content">
        <h1>{question}</h1>
        <div className="buttons">
          {showInitialButtons ? (
            <>
              <button className="btn_backward" onClick={() => handleInitialClick('UNO')}>
                UNO
              </button>
              <button className="btn_backward" onClick={() => handleInitialClick('Matador')}>
                Matador
              </button>
              <button className="btn_backward" onClick={() => handleInitialClick('Snyd')}>
                Snyd
              </button>
            </>
          ) : (
            <>
              <button className="btn_backward" onClick={handleYesClick}>
                JA
              </button>
              <button className="btn_backward" onClick={handleNoClick}>
                Nej
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Backward
