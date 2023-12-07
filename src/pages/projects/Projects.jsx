import "./Projects.scss"
import Project from "../../components/project-card/Project-Card"
import projects from "../../data/projects.json"
import { useState, useEffect } from "react"
import { Loader } from "../../utils/style/Atoms"
import ToTop from "../../components/to-top-button/To-Top-Button"

export default function Projects() {
  //useState du loader
  const [isLoading, setIsLoading] = useState(false)

  //Vérification du chargement des données
  useEffect(() => {
    if (projects !== undefined) {
      setIsLoading(false)
    } else {
      setIsLoading(true)
    }
  }, [])

  return (
    <>
      {isLoading ? (
        <div className="LoaderWrapper">
          <Loader />
        </div>
      ) : (
        <div className="page-content">
          <h1>Mes projets réalisés</h1>
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
          <ToTop />
        </div>
      )}
    </>
  )
}
