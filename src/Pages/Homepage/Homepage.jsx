import React from "react"
import Dessin from "../../Assets/Dessin.png"
import "./Homepage.scss"

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <div className="presentation-wrapper">
        <p className="quote quote__open">«</p>
        <p>
          J'aime comprendre une problématique et pouvoir y apporter une réponse
          tangible, de sa conception à sa réalisation et son expérimentation.
        </p>
        <p className="quote quote__close">»</p>
      </div>
      <img src={Dessin} alt="dessin" />
    </div>
  )
}
