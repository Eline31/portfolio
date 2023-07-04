import "./CV.scss"
import Carrousel from "../../Components/Carrousel/Carrousel"
import Diploma from "../../Components/Diploma-Card/Diploma-Card"

export default function CV() {
  return (
    <div className="cv-wrapper">
      <h1>Cheffe de projets numériques</h1>
      <div className="contentContainer">
        <Carrousel />
        {/* <div className="diplomas"> */}
        <Diploma />
        {/* </div> */}
        {/* <div className="abilities"></div> */}
      </div>
    </div>
  )
}
