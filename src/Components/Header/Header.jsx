import "./Header.scss"
import { StyledLink } from "../../Utils/style/Atoms"
import { useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()

  return (
    <>
      <div className="burger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <nav className="Navigation">
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
