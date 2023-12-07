import "./To-Top-Button.scss"
import chevron from "../../assets/chevronleft.png"

import React from "react"

export default function ToTop() {
  return (
    <div className="totop" onClick={() => window.scrollTo(0, 0)}>
      <img src={chevron} alt="Haut de page" />
    </div>
  )
}
