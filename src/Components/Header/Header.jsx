import "./Header.scss"
import { StyledLink } from "../../Utils/style/Atoms"
import { useLocation } from "react-router-dom"
import Burger from "./Burger"
// import { useState } from "react"

export default function Header({ isOpen, setIsOpen }) {
  const location = useLocation()
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Burger isOpen={isOpen} setIsOpen />
      <nav className={isOpen ? "Navigation" : "Navigation Navigation__hidden"}>
        <StyledLink
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Accueil
        </StyledLink>
        <StyledLink
          to="/projects"
          className={location.pathname === "/projects" ? "active" : ""}
        >
          Projets
        </StyledLink>
        <StyledLink
          to="/curriculumvitae"
          className={location.pathname === "/curriculumvitae" ? "active" : ""}
        >
          CV
        </StyledLink>
        <StyledLink
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </StyledLink>
      </nav>
    </>
  )
}
