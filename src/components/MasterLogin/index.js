import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class MasterLogin extends Component {
  render() {
    return (
      <div className="masterLoginContainer">
        <h1>Master </h1>
        <div className="buttonsContainer">
          <div>
            <Link to="/masterLoginForm">
              <button type="button" className="master-button-login">
                Log In
              </button>
            </Link>
          </div>
          <div>
            <Link to="/masterSignUpForm">
              <button type="button" className="master-button-signUp">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default MasterLogin
