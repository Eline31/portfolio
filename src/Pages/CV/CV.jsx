import "./CV.scss"
import Carrousel from "../../Components/Carrousel/Carrousel"
import experiences from "../../Data/experiences.json"

export default function CV() {
  return (
    <>
      <h1>Cheffe de projets numériques</h1>
      <p>
        J'aime comprendre une problématique et pouvoir y apporter une réponse
        tangible, de sa conception à sa réalisation et son expérimentation.
      </p>
      <div className="cv-wrapper">
        <div className="experiences">
          {experiences.map(experiences)}
          <Carrousel />
        </div>
        <div className="diplomas"></div>
        <div className="abilities"></div>
      </div>
    </>
  )
}
