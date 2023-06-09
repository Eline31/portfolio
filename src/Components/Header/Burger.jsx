// import { useState } from "react"
import "./Burger.scss"
import { useState } from "react"

export default function Burger() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="burger-menu"
      isOpen={false}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div />
      <div />
      <div />
    </div>
  )
}
