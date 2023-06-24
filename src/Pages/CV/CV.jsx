import "./CV.scss"
import Carrousel from "../../Components/Carrousel/Carrousel"
// import experiences from "../../Data/experiences.json"
// import Experience from "../../Components/Experience-Card/Experience-Card"

export default function CV() {
  return (
    <div className="wrapper">
      <h1>Cheffe de projets numériques</h1>
      <div className="cv-wrapper">
        <div className="experiences">
          {/* {experiences.map((experience, index) => experiences)} */}
          {/* <Experience /> */}
          <Carrousel />
        </div>
        <div className="diplomas"></div>
        <div className="abilities"></div>
      </div>
    </div>
  )
}
