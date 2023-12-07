import React from "react"
import "./Homepage.scss"

export default function Homepage() {
  return (
    <div className="homepage-wrapper">
      <div className="presentation-wrapper">
        <p className="quote quote__open">«</p>
        <p>
          J'aime être confrontée à une problématique, et par la mise en place
          d'un projet de sa conception à sa livraison, essayer d'y apporter une
          solution.
          <br />
          <br />
          Chaque projet s'inscrit dans un contexte qui peut être amené à
          évoluer, c'est pourquoi j'aborde les projets de la problématique dont
          il émerge puis participe à chacune des étapes de son développement,
          afin de m'assurer qu'il réponde toujours à un besoin réel.
        </p>
        <p className="quote quote__close">»</p>
      </div>
      <img src="https://i.imgur.com/dX2zKdh.png" alt="dessin" />
    </div>
  )
}
