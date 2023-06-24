import Experience from "../Experience-Card/Experience-Card.jsx"
import experiences from "../../Data/experiences.json"
import arrowleft from "../../Assets/arrow_left.png"
import arrowright from "../../Assets/arrow_right.png"
import { useState } from "react"
import { Loader } from "../../Utils/style/Atoms.jsx"
import "./Carrousel.scss"

export default function Carrousel() {
  //Identification de la slide actuelle
  const [current, setCurrent] = useState(0)
  //useState du loader
  const [isLoading, setIsLoading] = useState(false)

  //Fonction de gestion du roulement du carrousel vers la droite
  const nextSlide = () => {
    setIsLoading(true)
    if (current < experiences.length - 1) {
      setCurrent(current + 1)
    } else if (current === experiences.length - 1) {
      setCurrent(0)
    }
    setIsLoading(false)
  }

  //Fonction de gestion du roulement du carrousel vers la gauche
  const prevSlide = () => {
    setIsLoading(true)
    if (current > 0) {
      setCurrent(current - 1)
    } else if (current === 0) {
      setCurrent(experiences.length - 1)
    }
    setIsLoading(false)
  }

  return (
    <div className="CarrouselContainer">
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
        <>
          {experiences.map((experience, index) => {
            return (
              <div className="Xperience">
                <Experience
                  experience={experience}
                  className={
                    index === current
                      ? "Xperience Xperience__active"
                      : "Xperience"
                  }
                  key={`Xperience-${index}`}
                />
              </div>
            )
          })}
          {experiences.length > 1 && (
            <>
              <div className="Arrows">
                <button alt="Expérience précédente" onClick={prevSlide}>
                  <img
                    src={arrowleft}
                    className="arrowLeft"
                    alt="Flèche indiquant la gauche"
                  />
                </button>
                <button alt="Expérience suivante" onClick={nextSlide}>
                  <img
                    src={arrowright}
                    className="arrowRight"
                    alt="Flèche indiquant la droite"
                  />
                </button>
              </div>
              <p className="count">
                {current + 1} / {experiences.length}
              </p>
            </>
          )}
        </>
      )}
    </div>
  )
}
