import "./CV.scss"
import Carrousel from "../../Components/Carrousel/Carrousel"
import Diploma from "../../Components/Diploma-Card/Diploma-Card"
import Abilities from "../../Components/Abilities/Abilities"

export default function CV() {
  return (
    <div className="cv-wrapper">
      <h1>Cheffe de projets numériques</h1>
      <div className="contentContainer">
        <div className="part1">
          <Carrousel />
          <Diploma />
        </div>
        <Abilities />
      </div>
    </div>
  )
}
