import "./Contact.scss"
import email from "../../assets/mail.png"
import phone from "../../assets/smartphone-call.png"
import home from "../../assets/direction-sign.png"
import generationy from "../../assets/generationy.svg"

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="contact-wrapper">
        <div className="item">
          <img src={email} alt="icône email" />
          <p className="item__title">Email</p>
          <p className="item__content">eline.chambon@gmail.com</p>
        </div>
        <div className="item">
          <img src={phone} alt="icône smartphone" />
          <p className="item__title">Téléphone</p>
          <p className="item__content">06.89.89.79.52</p>
        </div>
        <div className="item">
          <img src={home} alt="icône panneau de direction" />
          <p className="item__title">Adresse</p>
          <p className="item__content">8, rue de Suez - 75018</p>
        </div>
        <div className="item">
          <img src={generationy} alt="icône de la génération Y" />
          <p className="item__title">Âge</p>
          <p className="item__content">31 ans</p>
        </div>
      </div>
    </div>
  )
}
