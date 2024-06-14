import {Switch, Route, Redirect} from 'react-router-dom'
import EBankLogin from './components/EBankLogin'
import EBankHom from './components/EBankHom'
import EBankNotFound from './components/EBankNotFound'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={EBankLogin} />
    <Route exact path="/" component={EBankHom} />
    <Route exact path="/not-found" component={EBankNotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
