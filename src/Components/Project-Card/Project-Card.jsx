import "./Project-Card.scss"

export default function Project({
  picture,
  name,
  field,
  purpose,
  firm,
  knowledges,
  isOpen,
  setIsOpen,
}) {
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
    <>
      <div className="project-wrapper">
        <div className="project-card" onClick={() => setIsOpen(!isOpen)}>
          <img src={picture} alt="Projet" />
          <h2>{name}</h2>
          <h3>{field}</h3>
          <p className="description">{purpose}</p>
          <p className="structure">Structure : {firm}</p>
          <div className="knowledges">{icons}</div>
        </div>
        {isOpen ? <div className="project-details-wrapper">Coucou</div> : null}
      </div>
    </>
  )
}
