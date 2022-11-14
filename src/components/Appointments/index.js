// Write your code here
import {Component} from 'react'
import {v4} from 'uuid'
import {format} from 'date-fns'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    inputTitle: '',
    inputDate: '',
    isFilterActive: false,
    appointmentsList: [],
  }

  onFilter = () => {
    const {isFilterActive} = this.state

    this.setState({isFilterActive: !isFilterActive})
  }

  onChangeInputTitle = event => {
    this.setState({inputTitle: event.target.value})
  }

  onChangeInputDate = event => {
    this.setState({inputDate: event.target.value})
  }

  onAddAppointment = event => {
    event.preventDefault()
    const {inputTitle, inputDate} = this.state
    const formattedDate = inputDate
      ? format(new Date(inputDate), 'dd MMMM yyyy, EEEE')
      : ''
    const title = inputTitle
    const date = formattedDate
    const newAppointment = {
      id: v4(),
      title,
      date,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      inputTitle: '',
      inputDate: '',
    }))
  }

  getFilteredAppointmentsList = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(
        eachTransaction => eachTransaction.isStarred === true,
      )
    }
    return appointmentsList
  }

  render() {
    const {inputTitle, inputDate, appointmentsList} = this.state
    const filteredAppointmentsList = this.getFilteredAppointmentsList()
    console.log(appointmentsList)

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="card-container">
            <h1 className="header">Add Appointments</h1>
            <div className="form-image-container">
              <form className="form" onSubmit={this.onAddAppointment}>
                <label htmlFor="title" className="label">
                  TITLE
                </label>
                <input
                  className="title-input"
                  value={inputTitle}
                  id="title"
                  type="text"
                  onChange={this.onChangeInputTitle}
                  placeholder="Title"
                />
                <label htmlFor="title" className="label">
                  DATE
                </label>
                <input
                  className="title-input"
                  value={inputDate}
                  id="title"
                  type="date"
                  onChange={this.onChangeInputDate}
                  placeholder="Title"
                />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="img"
              />
            </div>
            <hr className="hr" />
            <div className="bottom-container">
              <div className="bottom-header-container">
                <h1 className="bottom-header">Appointments</h1>
                <button
                  type="button"
                  className="starred-btn"
                  onClick={this.onFilter}
                >
                  Starred
                </button>
              </div>
              <ul className="ul">
                {appointmentsList.map(eachAppointment => (
                  <AppointmentItem
                    key={eachAppointment.id}
                    appointmentDetails={eachAppointment}
                    togglerStarred={this.togglerStarred}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
