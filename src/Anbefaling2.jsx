import React from 'react'
import sad from './assets/sad.webp'

function Anbefaling2() {
  return (
    <div className="anbefaling1-container">
      <h1>Spillet kan ikke anbefales </h1>
      <p>Efter vores vurdering lever UNO ikke helt op til forventningerne. Prøv de andre anbefalede spil.</p>
      <img src={sad} alt="fest" className="fest-image" />
    </div>
  )
}

export default Anbefaling2
