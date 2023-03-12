import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MasterLoginForm extends Component {
  state = {email: '', password: '', errorMsg: ''}

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
    const {email, password} = this.state
    const users = JSON.parse(localStorage.getItem('masterSignDetails'))
    if (users === null) {
      alert('Please SignUp')
      return
    }
    const arrayList = users.filter(
      user => user.email === email && user.password === password,
    )

    if (arrayList.length !== 0) {
      const {history} = this.props
      history.replace('/masterDashboard')
    } else {
      this.setState({errorMsg: 'Please enter correct username and password'})
    }
  }

  render() {
    const {email, password, errorMsg} = this.state
    return (
      <div className="StudentLoginFormContainer">
        <h1>Master Log in</h1>
        <form onSubmit={this.onSubmit} className="formContainer">
          <div className="inputContainer">
            <label htmlFor="email" className="labelEl">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.onChangeEmail}
              value={email}
              className="inputBar"
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password" className="labelEl">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              onChange={this.onChangePassword}
              value={password}
              className="inputBar"
            />
          </div>
          <button type="submit" className="LoginButton">
            Login
          </button>
          <p className="errorMsg">{errorMsg}</p>
          <Link to="/masterSignUpForm">
            <p className="para">Create Account</p>
          </Link>
        </form>
      </div>
    )
  }
}

export default MasterLoginForm
