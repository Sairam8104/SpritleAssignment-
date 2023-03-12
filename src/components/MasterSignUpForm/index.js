import {Component} from 'react'
import {Link} from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class MasterSignUpForm extends Component {
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
      const MasterLoginDetails =
        JSON.parse(localStorage.getItem('masterSignDetails')) || []

      const user = MasterLoginDetails.filter(each => each.email === emailInput)
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
      const newMasterLoginDetails = {
        id: uuidv4(),
        email: emailInput,
        password,
      }
      MasterLoginDetails.push(newMasterLoginDetails)
      this.setState({
        emailInput: '',
        password: '',
        rePassword: '',
        error: false,
      })

      localStorage.setItem(
        'masterSignDetails',
        JSON.stringify(MasterLoginDetails),
      )
    }
  }

  render() {
    const {emailInput, password, rePassword, errorMsg, error} = this.state
    return (
      <div className="masterSignupFormContainer">
        <form
          onSubmit={this.onSubmitForm}
          className="masterSignupformContainer"
        >
          <div className="masterSignupinputContainer">
            <label htmlFor="email" className="masterSignuplabelEl">
              E-mail Id
            </label>
            <input
              type="email"
              id="email"
              onChange={this.onChangeEmail}
              value={emailInput}
              className="masterSignupinputBar"
            />
          </div>
          <div className="masterSignupinputContainer">
            <label htmlFor="password" className="masterSignuplabelEl">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              className="masterSignupinputBar"
            />
          </div>
          <div className="masterSignupinputContainer">
            <label htmlFor="rePassword" className="masterSignuplabelEl">
              Re-Enter Password
            </label>
            <input
              type="text"
              id="rePassword"
              value={rePassword}
              onChange={this.onChangeRePassword}
              className="masterSignupinputBar"
            />
          </div>
          <button type="submit" className="SignUpButton">
            Sign Up
          </button>
          {error && <p className="masterSignuperrorMsg">{errorMsg}</p>}
          <Link to="/masterLoginForm">
            <p className="para">Already have account?</p>
          </Link>
        </form>
      </div>
    )
  }
}

export default MasterSignUpForm
