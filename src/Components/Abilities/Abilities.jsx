import "./abilities.scss"
import languages from "../../assets/speak.png"
import design from "../../assets/graphic-design.png"
import os from "../../assets/open-source.png"
import coding from "../../assets/web-programming.png"

export default function Abilities() {
  return (
    <div className="abilities-wrapper">
      <h2>Compétences</h2>
      <div className="abilities">
        <div className="ability">
          <img src={languages} alt="icône langage" />
          <p className="ability__title">Langues</p>
          <p className="ability__description">
            Français (langue natale), Anglais (courant)
          </p>
        </div>
        <div className="ability">
          <img src={design} alt="icône design" />
          <p className="ability__title">Conception graphique</p>
          <p className="ability__description">
            Indesign, Photoshop, Illustrator, Figma
          </p>
        </div>
        <div className="ability">
          <img src={os} alt="icône open source" />
          <p className="ability__title">Outils Open Source</p>
          <p className="ability__description">
            Github, Wiki, CodiMD, Nextcloud
          </p>
        </div>
        <div className="ability">
          <img src={coding} alt="icône développement web" />
          <p className="ability__title">Développement web</p>
          <p className="ability__description">
            JavaScript, Node.JS, Express, MongoDB, API Rest, REACT
          </p>
        </div>
      </div>
    </div>
  )
}
