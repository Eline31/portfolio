import "./CV.scss"
import Carrousel from "../../components/carrousel/Carrousel"
import Diploma from "../../components/diploma-card/Diploma-Card"
import Abilities from "../../components/abilities/Abilities"
import experiences from "../../data/experiences.json"

export default function CV() {
  return (
    <div className="cv-wrapper">
      <h1>Cheffe de projets numériques</h1>
      <div className="contentContainer">
        <div className="part1">
          <div className="work">
            <h2>Expériences professionnelles</h2>
            <Carrousel
              data={experiences}
              key={`${experiences.firm}-${experiences.title}`}
            />
          </div>
          <Diploma key={`${Diploma.place}-${Diploma.dates}`} />
        </div>
        <Abilities />
      </div>
    </div>
  )
}
