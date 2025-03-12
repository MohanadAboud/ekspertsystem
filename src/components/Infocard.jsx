import { useNavigate } from 'react-router-dom'
import './Infocard.css'
import pss from '../assets/passs.webp'
import search from '../assets/search.webp'

const InfoCard = ({ title, link, imageSrc }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }

  return (
    <div className="card" onClick={handleClick}>
      <h2>{title}</h2>
      <img src={imageSrc} alt={title} className="card-image" />
    </div>
  )
}

export default function Infocard() {
  return (
    <div className="container">
      <InfoCard title="Hvad skal jeg spille" imageSrc={search} link="/hvad-skal-jeg-spille" />
      <InfoCard title="Passer spillet dig" imageSrc={pss} link="/passer-spillet-dig" />
    </div>
  )
}
