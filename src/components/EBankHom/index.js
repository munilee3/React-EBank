import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  HomeContainer,
  Navbar,
  WebsiteLogo,
  LogoutBtn,
  HomeDetailsContainer,
  Heading,
  CardDetails,
} from './styledComponent'

class EBankHom extends Component {
  onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/ebank/login')
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token === undefined) {
      return <Redirect to="/ebank/login" />
    }
    return (
      <HomeContainer>
        <Navbar>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
            alt="website logo"
          />
          <LogoutBtn type="button" onClick={this.onClickLogout}>
            Logout
          </LogoutBtn>
        </Navbar>
        <HomeDetailsContainer>
          <Heading>Your Flexibility, Our Excellence</Heading>
          <CardDetails
            src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
            alt="digital card"
          />
        </HomeDetailsContainer>
      </HomeContainer>
    )
  }
}

export default EBankHom
