import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class StudentLogin extends Component {
  render() {
    return (
      <div className="loginContainer">
        <h1>Student Details</h1>
        <div className="StudentButtonsContainer">
          <div>
            <Link to="/StudentLoginForm">
              <button type="button" className="student-button-login">
                Log In
              </button>
            </Link>
          </div>
          <div>
            <Link to="/studentSignUpForm">
              <button type="button" className="student-button-signUp">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentLogin
