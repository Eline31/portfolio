import diplomas from "../../Data/diplomas.json"
import "./Diploma-Card.scss"

export default function Diploma() {
  return (
    <div className="Diploma-Wrapper">
      <h2>Diplômes</h2>
      {diplomas.map((diploma, index) => {
        return (
          <div className="diploma-content">
            <p className="datesplace" key={`${diploma.dates}-${index}`}>
              {diploma.dates} • {diploma.place}
            </p>
            <h3 className="title" key={`${diploma.title}-${index}`}>
              {diploma.title}
            </h3>
            <p className="description" key={`Description-${index}`}>
              {diploma.description}
            </p>
            <p className="competences" key={`Compétences-${index}`}>
              {diploma.competences}
            </p>
          </div>
        )
      })}
    </div>
  )
}
