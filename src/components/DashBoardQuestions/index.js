import './index.css'

const DashBoardQuestions = props => {
  const {each} = props
  const {answer, questionNo, inputValue} = each
  return (
    <li className="questionAndAnswerContainer">
      <div className="questioncontent">
        <p className="questionNo">{questionNo}.</p>
        <h1 className="question">Evaluate : {inputValue}</h1>
      </div>
      <p className="answer">Solution : {answer}</p>
    </li>
  )
}

export default DashBoardQuestions
