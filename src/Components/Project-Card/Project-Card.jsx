import "./Project-Card.scss"
import { useState } from "react"
import close from "../../Assets/close.png"

export default function Project({
  picture,
  name,
  field,
  purpose,
  description,
  firm,
  knowledges,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const icons = knowledges?.map((knowledge, index) => {
    return (
      <img
        src={knowledge.icon}
        alt="icône"
        key={`${index}-${knowledge.title}`}
      />
    )
  })

  return (
    <div
      className="project-wrapper"
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="project-card">
        <img src={picture} alt="Projet" />
        <h2>{name}</h2>
        <h3>{field}</h3>
        <p className="purpose">{purpose}</p>
        <div className="knowledges">{icons}</div>
      </div>
      <div
        className={
          isOpen
            ? "project-details-wrapper project-details-wrapper__active"
            : "project-details-wrapper"
        }
      >
        <img src={picture} alt="Projet" />
        <div className="project-content">
          <img
            src={close}
            alt="Fermer"
            className="close"
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className="main-info">
            <span>
              <h2>{name}</h2>
              <h3>{field}</h3>
            </span>
            <p className="structure">{firm}</p>
          </div>
          <div className="details">
            <p className="description">{description}</p>
            <div className="knowledges">{icons}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
