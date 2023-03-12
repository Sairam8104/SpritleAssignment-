import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class LoginPage extends Component {
  render() {
    return (
      <div className="loginContainer">
        <div className="container">
          <h1>You Tell, I Do</h1>
          <div className="buttonsContainer">
            <div>
              <Link to="/studentLogin">
                <button type="button" className="btns">
                  Student
                </button>
              </Link>
            </div>
            <div>
              <Link to="/masterLogin">
                <button type="button" className="btns">
                  Master
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
