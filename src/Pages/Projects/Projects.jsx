import "./Projects.scss"
import Project from "../../Components/Project-Card/Project-Card"
import projects from "../../Data/projects.json"

export default function Projects() {
  return (
    <div className="page-content">
      <h1>Mes projets</h1>
      <div className="projects-wrapper">
        {projects?.map((project) => (
          <Project
            key={project.id}
            picture={project.image}
            name={project.name}
            field={project.field}
            purpose={project.purpose}
            description={project.description}
            firm={project.firm}
            knowledges={project.knowledges}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}
