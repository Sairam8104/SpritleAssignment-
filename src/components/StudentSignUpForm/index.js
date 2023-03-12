import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class StudentSignUpForm extends Component {
  state = {
    emailInput: '',
    password: '',
    rePassword: '',
    errorMsg: '',
    error: false,
  }

  onChangeEmail = event => {
    this.setState({emailInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeRePassword = event => {
    this.setState({rePassword: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {emailInput, password, rePassword} = this.state

    if (emailInput === ' ' || password === '' || rePassword === '') {
      this.setState({errorMsg: 'please enter valid details', error: true})
    } else if (password !== rePassword) {
      this.setState({
        errorMsg: 'please enter correct match password',
        error: true,
      })
    } else {
      const StudentLoginDetails =
        JSON.parse(localStorage.getItem('studentSignDetails')) || []
      const user = StudentLoginDetails.filter(each => each.email === emailInput)
      console.log(user)
      if (user.length >= 1) {
        this.setState({
          errorMsg: 'Username already exist.Please try another name',
          error: true,
          emailInput: '',
          password: '',
          rePassword: '',
        })
        return
      }
      const newStudentLoginDetails = {
        id: uuidv4(),
        email: emailInput,
        password,
      }
      StudentLoginDetails.push(newStudentLoginDetails)
      this.setState({
        emailInput: '',
        password: '',
        rePassword: '',
      })

      localStorage.setItem(
        'studentSignDetails',
        JSON.stringify(StudentLoginDetails),
      )
    }
  }

  render() {
    const {emailInput, password, rePassword, errorMsg, error} = this.state
    return (
      <div className="studentSignupFormContainer">
        <h1>Student SignUp Form</h1>
        <form
          onSubmit={this.onSubmitForm}
          className="studentSignupformContainer"
        >
          <div className="studentSignupinputContainer">
            <label htmlFor="email" className="studentSignuplabelEl">
              E-mail Id
            </label>
            <input
              type="email"
              id="email"
              onChange={this.onChangeEmail}
              value={emailInput}
              className="studentSignupinputBar"
            />
          </div>
          <div className="studentSignupinputContainer">
            <label htmlFor="password" className="studentSignuplabelEl">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              className="studentSignupinputBar"
            />
          </div>
          <div className="studentSignupinputContainer">
            <label htmlFor="rePassword" className="studentSignuplabelEl">
              Re-Enter Password
            </label>
            <input
              type="text"
              id="rePassword"
              value={rePassword}
              onChange={this.onChangeRePassword}
              className="studentSignupinputBar"
            />
          </div>
          <button type="submit" className="SignUpButton">
            Sign Up
          </button>
          {error && <p className="studentSignuperrorMsg">{errorMsg}</p>}
          <Link to="/studentLoginForm">
            <p className="para">Already have account?</p>
          </Link>
        </form>
      </div>
    )
  }
}

export default StudentSignUpForm
