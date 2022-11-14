// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {eachAppointment, togglerStarred} = props
  const {title, date, id, isStarred} = eachAppointment

  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    togglerStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button type="button" className="star-button" onClick={onClickStar}>
          <img src={starImgUrl} className="star" alt="star" testid="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}
export default AppointmentItem
