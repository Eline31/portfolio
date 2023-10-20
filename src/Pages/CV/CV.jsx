import "./CV.scss"
import Carrousel from "../../Components/Carrousel/Carrousel"
import Diploma from "../../Components/Diploma-Card/Diploma-Card"
import Abilities from "../../Components/Abilities/Abilities"
import experiences from "../../Data/experiences.json"
import experiencespro from "../../Data/experiencespro.json"

export default function CV() {
  return (
    <div className="cv-wrapper">
      <h1>Cheffe de projets numériques</h1>
      <div className="contentContainer">
        <div className="part1">
          <div className="work">
            <h2>Expériences professionnelles</h2>
            <Carrousel
              data={experiencespro}
              key={`${experiencespro.firm}-${experiencespro.title}`}
            />
            <h2>Emplois saisonniers et étudiants</h2>
            <Carrousel data={experiences} key={`title-${experiences.title}`} />
          </div>
          <Diploma key={`${Diploma.place}-${Diploma.dates}`} />
        </div>
        <Abilities />
      </div>
    </div>
  )
}
