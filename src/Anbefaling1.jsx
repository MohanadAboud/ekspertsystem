import React from 'react'
import fest from './assets/fest.webp'

function Anbefaling1() {
  return (
    <div className="anbefaling1-container">
      <h1>Spillet kan helt klart anbefales!</h1>
      <p>Vi håber, at du og dine venner nyder hvert øjeblik med spilet. Rigtig god fornøjelse!</p>
      <img src={fest} alt="fest" className="fest-image" />
    </div>
  )
}

export default Anbefaling1
