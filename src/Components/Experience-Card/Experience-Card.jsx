// import experiences from "../../Data/experiences.json"
import "./Experience-Card.scss"

export default function Experience({ experience }) {
  const activitiesList = experience.activities

  const activity = activitiesList?.map((activity, index) => {
    return (
      <div className="content" key={`${activity}-${index}`}>
        <h5>{activity.title}</h5>
        <span>
          {activity.description?.map((description, index) => {
            return (
              <p className="content__description" key={`description-${index}`}>
                {description}
              </p>
            )
          })}
        </span>
        <p className="content__examples">{activity.examples}</p>
      </div>
    )
  })

  return (
    <div className="card-container">
      <div className="title">
        <div className="title__main">
          <h2>{experience.title}</h2>
          <h3>{experience.firm}</h3>
          <h4>{experience.sector}</h4>
        </div>
        <div className="title__details">
          <p className="title__details__dates">{experience.dates}</p>
          <p className="title__details__place">{experience.place}</p>
        </div>
      </div>
      {activity}
    </div>
  )
}
