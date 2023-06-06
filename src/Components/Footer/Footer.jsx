import "./Footer.scss"
import github from "../../Assets/github.png"
import linkedin from "../../Assets/linkedin.png"
import twitter from "../../Assets/twitter.png"

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="icons-wrapper">
        <a href="https://github.com/eline31" target="_blank" rel="noreferrer">
          <img src={github} alt="Icône de github" />
        </a>
        <a
          href="https://www.linkedin.com/in/elinechambon/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Icône de linkedin" />
        </a>
        <a
          href="https://twitter.com/ElineChambon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Icône de twitter" />
        </a>
      </div>
      <p>Designed & Developed on ReactJs ©2023 by Eline Chb</p>
    </div>
  )
}
