import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponent'

const EBankNotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found.
    </NotFoundDescription>
  </NotFoundContainer>
)

export default EBankNotFound
