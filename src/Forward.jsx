import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Forward() {
  const [question, setQuestion] = useState('Har du lyst til at spille kort spil')
  const navigate = useNavigate()

  const handleYesClick = () => {
    if (question === 'Har du lyst til at spille kort spil') {
      setQuestion('Har du lyst til at spille et hyggeligt og populært kortspil')
    } else if (question === 'Har du lyst til at spille et hyggeligt og populært kortspil') {
      setQuestion('Vi anbefaler dig at spille UNO')
    } else if (question === 'Vi anbefaler dig at spille UNO') {
      navigate('/congrats')
    } else if (question === 'Har du lyst til at spille brætspil') {
      setQuestion('Vi anbefaler dig at spille Matador')
    } else if (question === 'Har du lyst til at spille Computer  spil') {
      setQuestion('Vi anbefaler dig at spille Among US')
    } else if (question === 'Vi anbefaler dig SNYD') {
      navigate('/congrats')
    } else if (question === 'Vi anbefaler dig at spille Matador') {
      navigate('/congrats')
    } else if (question === 'Vi anbefaler dig at spille Among US') {
      navigate('/congrats')
    }
  }

  const handleNoClick = () => {
    if (question === 'Har du lyst til at spille kort spil') {
      setQuestion('Har du lyst til at spille brætspil')
    } else if (question === 'Har du lyst til at spille brætspil') {
      setQuestion('Har du lyst til at spille Computer  spil')
    } else if (question === 'Vi anbefaler dig at spille UNO') {
      setQuestion('Vi anbefaler dig SNYD')
    } else if (question === 'Vi anbefaler dig SNYD') {
      setQuestion('Har du lyst til at spille brætspil')
    } else if (question === 'Vi anbefaler dig at spille Matador') {
      setQuestion('Har du lyst til at spille Computer  spil')
    } else if (question === 'Har du lyst til at spille et hyggeligt og populært kortspil') {
      setQuestion('Vi anbefaler dig SNYD')
    } else if (question === 'Har du lyst til at spille Computer  spil') {
      navigate('/Endpage')
    } else if (question === 'Vi anbefaler dig at spille Among US') {
      navigate('/Endpage')
    }
  }

  return (
    <div className="forward_container">
      <div className="content">
        <h1>{question}</h1>
        <div className="buttons">
          <button className="btn_forward" onClick={handleYesClick}>
            JA
          </button>
          <button className="btn_forward" onClick={handleNoClick}>
            Nej
          </button>
        </div>
      </div>
    </div>
  )
}

export default Forward
