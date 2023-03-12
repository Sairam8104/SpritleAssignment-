import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import DashBoardQuestions from '../DashBoardQuestions'
import './index.css'

class MasterDashBoard extends Component {
  state = {
    questionInput: '',
    questionNo: 1,
    questionsList: [],
    errorMsg: '',
    error: false,
  }

  functionValue = valueArray => {
    const digits = []
    let operator = ''

    valueArray.map(item => {
      switch (item) {
        case 'one':
          return digits.push(1)

        case 'two':
          return digits.push(2)

        case 'three':
          return digits.push(3)

        case 'four':
          return digits.push(4)

        case 'five':
          return digits.push(5)

        case 'six':
          return digits.push(6)

        case 'seven':
          return digits.push(7)

        case 'eight':
          return digits.push(8)

        case 'nine':
          return digits.push(9)
        case 'zero':
          return digits.push(0)

        case 'times':
          operator = '*'
          return operator
        case 'plus':
          operator = '+'
          return operator
        case 'minus':
          operator = '-'
          return operator
        case 'divided_by':
          operator = '/'
          return operator

        default:
          return false
      }
    })

    let answer
    let inputValue
    if (operator === '*') {
      answer = digits[0] * digits[1]
      inputValue = `${digits[0]} * ${digits[1]}`
    } else if (operator === '/') {
      answer = digits[0] / digits[1]
      answer = Math.round(answer) - 1
      inputValue = `${digits[0]} / ${digits[1]}`
    } else if (operator === '+') {
      answer = digits[0] + digits[1]
      inputValue = `${digits[0]} + ${digits[1]}`
    } else if (operator === '-') {
      answer = digits[0] - digits[1]
      inputValue = `${digits[0]} - ${digits[1]}`
    }
    const {questionNo} = this.state
    const object = {
      id: uuidv4(),
      questionNo,
      answer,
      inputValue,
    }

    this.setState(prevState => ({
      questionsList: [...prevState.questionsList, object],
      questionNo: prevState.questionNo + 1,
      questionInput: '',
    }))
  }

  onChangeQuestion = event => {
    this.setState({questionInput: event.target.value})
  }

  onClickLogOut = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickButton = event => {
    event.preventDefault()
    const {questionInput} = this.state
    console.log(questionInput.len)
    if (questionInput !== '') {
      let value = questionInput.replaceAll('(', ' ')
      value = value.replaceAll(')', ' ')
      const valueArray = value.split(' ', 3)
      this.functionValue(valueArray)
      this.setState({error: false})
    } else {
      this.setState({errorMsg: 'Please Enter Values', error: true})
    }
  }

  renderQuestionAndAnswers = () => {
    const stringifiedQuestionAndAnswersList = localStorage.getItem(
      'QuestionsList',
    )
    const parsedQuestionAndAnswersList = JSON.parse(
      stringifiedQuestionAndAnswersList,
    )
    return (
      <ul className="list-value">
        {parsedQuestionAndAnswersList.map(each => (
          <DashBoardQuestions key={each.id} each={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {questionInput, questionsList, errorMsg, error} = this.state
    localStorage.setItem('QuestionsList', JSON.stringify(questionsList))
    return (
      <div className="masterDashBoardContainer">
        <button
          type="button"
          className="logoutBtn"
          onClick={this.onClickLogOut}
        >
          LogOut
        </button>
        <div className="dashBoardContainer">
          <h1>Master DashBoard</h1>
          <form className="questionContainer" onSubmit={this.onClickButton}>
            <div className="questionInputContainer">
              <label htmlFor="question" className="labelQuestion">
                Questions
              </label>
              <input
                type="text"
                id="question"
                value={questionInput}
                placeholder="Enter The Function"
                onChange={this.onChangeQuestion}
                className="questionInputBar"
              />
            </div>
            <button type="submit" className="getButton">
              Get Answer
            </button>
            {error && <p className="errorMsg">{errorMsg}</p>}
          </form>
        </div>

        <div className="questionsList">{this.renderQuestionAndAnswers()}</div>
      </div>
    )
  }
}

export default MasterDashBoard
