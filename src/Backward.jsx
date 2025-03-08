import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Backward() {
  const [question, setQuestion] = useState('Er i flere end 3 personer')
  const navigate = useNavigate()

  const handleYesClick = () => {
    if (question === 'Er i flere end 3 personer') {
      setQuestion('Har du lyst til at spille imod andre')
    } else if (question === 'Har du lyst til at spille imod andre') {
      setQuestion('Skal det være et kort spil?')
    } else if (question === 'Skal det være et kort spil?') {
      navigate('/Anbefaling1')
    }
  }

  const handleNoClick = () => {
    if (question === 'Skal det være et kort spil?') {
      navigate('/Anbefaling2')
    } else if (question === 'Er i flere end 3 personer') {
      setQuestion('Har du lyst til at spille imod andre')
    } else if (question === 'Har du lyst til at spille imod andre') {
      setQuestion('Skal det være et kort spil?')
    }
  }

  return (
    <div className="backward_container">
      <div className="content">
        <h1>{question}</h1>
        <div className="buttons">
          <button className="btn_backward" onClick={handleYesClick}>
            JA
          </button>
          <button className="btn_backward" onClick={handleNoClick}>
            Nej
          </button>
        </div>
      </div>
    </div>
  )
}

export default Backward
