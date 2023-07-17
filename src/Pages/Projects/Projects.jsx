import "./Projects.scss"
import Project from "../../Components/Project-Card/Project-Card"
import projects from "../../Data/projects.json"
import { useState } from "react"

export default function Projects() {
  const [isOpen, setIsOpen] = useState(false)
  // const icons = knowledges?.map((knowledge, index) => {
  //   return (
  //     <img
  //       src={knowledge.icon}
  //       alt="icône"
  //       key={`${index}-${knowledge.title}`}
  //     />
  //   )
  // })

  return (
    <div className="page-content">
      <h1>Mes projets</h1>
      <>
        {isOpen ? (
          <>
        <div className="detailed-project" isOpen>

        </div>
        <div className="projects-wrapper">
        {projects?.map((project, index) => (
          <Project
            onClick={setIsOpen(!isOpen)}
            key={index}
            picture={project.image}
            name={project.name}
            field={project.field}
            purpose={project.purpose}
            firm={project.firm}
            knowledges={project.knowledges}
          />
        ))}
        </>
        ) : (
          <div className="projects-wrapper">
        {projects?.map((project, index) => (
          <Project
            onClick={setIsOpen(!isOpen)}
            key={index}
            picture={project.image}
            name={project.name}
            field={project.field}
            purpose={project.purpose}
            firm={project.firm}
            knowledges={project.knowledges}
          />
        ))}
          </div>
        )
        }
        </>
    </div>
  )
}
