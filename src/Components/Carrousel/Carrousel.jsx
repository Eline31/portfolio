import Experience from "../Experience-Card/Experience-Card.jsx"
import experiences from "../../Data/experiences.json"
import chevronleft from "../../Assets/chevronleft.png"
import chevronright from "../../Assets/chevronright.png"
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
    <>
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
        <div className="Carrousel-wrapper">
          <div
            className="buttons"
            alt="Expérience précédente"
            onClick={prevSlide}
          >
            <img
              src={chevronleft}
              className="arrowLeft"
              alt="Flèche indiquant la gauche"
            />
          </div>
          <div className="Xperience-wrapper">
            {experiences.map((experience, index) => {
              return (
                <div
                  className={
                    index === current ? "Xperience__active" : "Xperience"
                  }
                >
                  <Experience
                    experience={experience}
                    key={`Xperience-${index}`}
                  />
                </div>
              )
            })}
          </div>
          <div
            className="buttons"
            alt="Expérience suivante"
            onClick={nextSlide}
          >
            <img
              src={chevronright}
              className="arrowRight"
              alt="Flèche indiquant la droite"
            />
          </div>
        </div>
      )}
    </>
  )
}
