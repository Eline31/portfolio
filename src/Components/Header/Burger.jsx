// import { useState } from "react"
import "./Burger.scss"
import { useState } from "react"

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={isOpen ? "burger-menu burger-menu__open" : "burger-menu"}
      isOpen={isOpen}
      onClick={() => setIsOpen(!isOpen)}
      // setIsOpen={setIsOpen}
    >
      <div />
      <div />
      <div />
    </div>
  )
}
