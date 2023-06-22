import experiences from "../../Data/experiences.json"
import "./Experience.scss"

export default function Experience() {
  const experience = experiences[0]
  const activities = experience.activities
  console.log(activities)

  // const tasks = activities?.description.map((task, index) => {
  //   return (
  //     <span key={index}>
  //       <p>{task}</p>
  //     </span>
  //   )
  // })

  return (
    <div className="card-wrapper">
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
      <div className="content">
        {experience &&
          experience.activities.map((activity, index) => (
            <>
              <h5 key={`${activity.title}-${index}`}>{activity.title}</h5>
              {/* <div
                className="content__description"
                key={`${activity}-${index}`}
              >
                {activity.description.map((task, index) => (
                  <p key={`${task}-${index}`}>{task}</p>
                ))}
              </div> */}
              <p className="content__description">{activity.description}</p>
              <p className="content__examples">{activity.examples}</p>
            </>
          ))}
      </div>
    </div>
  )
}
