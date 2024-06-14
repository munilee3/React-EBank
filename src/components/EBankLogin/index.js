import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginPageContainer,
  LoginContainer,
  LoginImg,
  LoginDetailsContainer,
  LoginHeader,
  LoginForm,
  Label,
  Input,
  LoginBtn,
  ErrorMessage,
} from './styledComponent'

class EBankLogin extends Component {
  state = {userID: '', pin: '', errorMsg: '', isError: false}

  onSubmitLogin = async event => {
    event.preventDefault()
    const {userID, pin} = this.state
    const user_id = userID
    const userDetails = {user_id, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: data.error_msg, isError: true})
    }
  }

  onChangeUserId = event => {
    this.setState({userID: event.target.value})
  }

  onChangePin = event => {
    this.setState({pin: event.target.value})
  }

  render() {
    const {userID, pin, errorMsg, isError} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginPageContainer>
        <LoginContainer>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginDetailsContainer>
            <LoginHeader>Welcome Back!</LoginHeader>
            <LoginForm onSubmit={this.onSubmitLogin}>
              <Label htmlFor="userid">User ID</Label>
              <Input
                placeholder="Enter User ID"
                id="userid"
                onChange={this.onChangeUserId}
                value={userID}
                type="text"
              />
              <Label htmlFor="pin">PIN</Label>
              <Input
                placeholder="Enter PIN"
                id="pin"
                onChange={this.onChangePin}
                value={pin}
                type="password"
              />
              <LoginBtn type="submit">Login</LoginBtn>
              {isError && <ErrorMessage>{errorMsg}</ErrorMessage>}
            </LoginForm>
          </LoginDetailsContainer>
        </LoginContainer>
      </LoginPageContainer>
    )
  }
}

export default EBankLogin
