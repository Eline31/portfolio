import React from "react"
import Dessin from "../../Assets/Dessin.png"
import "./Homepage.scss"

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <div className="presentation-wrapper">
        <p className="quote quote__open">«</p>
        <p>
          J’aime accompagner un projet de la problématique dont il émerge, à sa
          conception, sa réalisation et enfin son expérimentation.
        </p>
        <p className="quote quote__close">»</p>
      </div>
      <img src={Dessin} alt="dessin" />
    </div>
  )
}
