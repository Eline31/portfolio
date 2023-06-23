// import { useState } from "react"
import "./Burger.scss"
// import { useState } from "react"

export default function Burger({ isOpen, setIsOpen }) {
  return (
    <nav
      className={isOpen ? "burger-menu burger-menu__open" : "burger-menu"}
      isOpen
      // setIsOpen
      // onClick={() => setIsOpen(!isOpen)}
    >
      <div />
      <div />
      <div />
    </nav>
  )
}
