import {Component} from 'react'
import DashBoardStudent from '../DashBoardStudent'
import './index.css'

class StudentDashBoard extends Component {
  onClickLogout = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const stringifiedQuestionAndAnswersList = localStorage.getItem(
      'QuestionsList',
    )
    const parsedQuestionAndAnswersList = JSON.parse(
      stringifiedQuestionAndAnswersList,
    )
    console.log(parsedQuestionAndAnswersList)

    return (
      <div className="StudentDashBoardContainer">
        <div>
          <button
            type="button"
            onClick={this.onClickLogout}
            className="logoutBtn"
          >
            LogOut
          </button>
        </div>
        <h1 className="heading">Student DashBoard</h1>
        {parsedQuestionAndAnswersList !== null && (
          <ul className="list-value">
            {parsedQuestionAndAnswersList.map(each => (
              <DashBoardStudent key={each.id} each={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default StudentDashBoard
