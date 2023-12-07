import "./To-Top-Button.scss"
import chevron from "../../assets/chevronleft.png"
import React from "react"
import { useState, useEffect } from "react"

export default function ToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("click", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  return (
    showTopBtn && (
      <div
        className="totop"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={chevron} alt="Haut de page" />
      </div>
    )
  )
}
