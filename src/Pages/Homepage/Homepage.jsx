import React from "react"
import Dessin from "../../Assets/Dessin.png"
import "./Homepage.scss"

export default function Homepage() {
  return (
    <div className="wrapper">
      <div className="presentation-wrapper">
        <p>«</p>
        <p>
          J'aime comprendre une problématique et pouvoir y apporter une réponse
          tangible, de sa conception à sa réalisation et son expérimentation.
        </p>
        <p>»</p>
      </div>
      <img src={Dessin} alt="dessin" />
    </div>
  )
}
