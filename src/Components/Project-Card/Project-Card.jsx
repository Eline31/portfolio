import "./Project-Card.scss"
import { useState } from "react"
import close from "../../assets/close.png"

export default function Project({
  picture,
  name,
  field,
  purpose,
  description,
  firm,
  link,
  knowledges,
}) {
  const [isOpen, setIsOpen] = useState(false)

  const icons = knowledges?.map((knowledge, index) => {
    return (
      <img
        src={knowledge.icon}
        alt={knowledge.title}
        title={knowledge.title}
        key={`${index}-${knowledge.title}`}
      />
    )
  })

  return (
    <div
      className={
        isOpen ? "project-wrapper project-wrapper__active" : "project-wrapper"
      }
    >
      <div className="project-card">
        <div className="project-pic-container">
          <img src={picture} alt="Projet" className="project-pic" />
        </div>
        <h2>{name}</h2>
        <h3>{field}</h3>
        <p className="purpose">{purpose}</p>
        <div className="knowledges">{icons}</div>
        <div className="button" onClick={() => setIsOpen(!isOpen)}>
          <p>+</p>
        </div>
      </div>
      <div
        className={
          isOpen ? "project-details-wrapper__active" : "project-details-wrapper"
        }
      >
        <img
          src={close}
          alt="Fermer"
          className="close"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="project-pic-container">
          <img src={picture} alt="Projet" className="project-pic" />
        </div>
        <div className="project-content">
          <div className="main-info">
            <span className="titles">
              <h2>{name}</h2>
              <h3>{field}</h3>
              <p className="structure">{firm}</p>
            </span>
            {link ? (
              <a href={link} target="_blank" rel="noreferrer" className="Link">
                <img
                  src="https://i.imgur.com/965xgtZ.png"
                  alt="lien vers le projet"
                />
              </a>
            ) : null}
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
