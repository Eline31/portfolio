import React from "react"
import "./Homepage.scss"

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <div className="presentation-wrapper">
        <p className="quote quote__open">«</p>
        <p>
          J'aime comprendre une problématique et y apporter une réponse tangible
          par la création d'un projet, de sa conception à sa réalisation et son
          expérimentation.
        </p>
        <p className="quote quote__close">»</p>
      </div>
      <img src="https://i.imgur.com/dX2zKdh.png" alt="dessin" />
    </div>
  )
}
