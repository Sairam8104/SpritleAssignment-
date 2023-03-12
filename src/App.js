import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import StudentLogin from './components/StudentLogin'
import MasterLogin from './components/MasterLogin'
import StudentSignUpForm from './components/StudentSignUpForm'
import MasterSignUpForm from './components/MasterSignUpForm'
import StudentLoginForm from './components/StudentLoginForm'
import MasterLoginForm from './components/MasterLoginForm'
import StudentDashBoard from './components/StudentDashBoard'
import MasterDashBoard from './components/MasterDashBoard'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/studentLogin" component={StudentLogin} />
      <Route exact path="/masterLogin" component={MasterLogin} />
      <Route exact path="/studentSignUpForm" component={StudentSignUpForm} />
      <Route exact path="/masterSignUpForm" component={MasterSignUpForm} />
      <Route exact path="/studentLoginForm" component={StudentLoginForm} />
      <Route exact path="/masterLoginForm" component={MasterLoginForm} />
      <Route exact path="/studentDashboard" component={StudentDashBoard} />
      <Route exact path="/masterDashboard" component={MasterDashBoard} />
    </Switch>
  </BrowserRouter>
)
export default App
