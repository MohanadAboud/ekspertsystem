import { useNavigate } from 'react-router-dom'
import './Infocard.css'

const InfoCard = ({ title, buttonText, link }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>{title}</h2>
      <button>{buttonText}</button>
    </div>
  )
}

export default function Infocard() {
  return (
    <div className="container">
      <InfoCard title="Hvad skal jeg spille" buttonText="Start" link="/hvad-skal-jeg-spille" />
      <InfoCard title="Passer spillet dig" buttonText="Start" link="/passer-spillet-dig" />
    </div>
  )
}
