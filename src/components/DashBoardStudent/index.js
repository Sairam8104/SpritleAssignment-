import './index.css'

const DashBoardStudent = props => {
  const {each} = props
  const {answer, questionNo, inputValue} = each

  return (
    <li className="questionAndAnswerContainerDashBoard">
      <div className="questioncontentDashboard">
        <p className="questionNoDashboard">{questionNo}</p>
        <h1 className="questionDashboard">Evaluate : {inputValue}</h1>
      </div>
      <p className="answerDashboard">Solution : {answer}</p>
    </li>
  )
}
export default DashBoardStudent
