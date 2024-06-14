import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  border-radius: 30px;
  background-color: #e0eefe;
  min-height: 80vh;
`
export const LoginImg = styled.img`
  width: 450px;
  height: 400px;
  margin: 40px;
  margin: auto;
`
export const LoginDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 30px;
  background-color: #ffffff;
  padding: 20px;
  width: 750px;
  height: 80vh;
`
export const LoginHeader = styled.h1`
  color: #152850;
  font-family: 'roboto';
  font-size: 50px;
  font-weight: bold;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  color: #5a7184;
  font-family: 'roboto';
  font-size: 18px;
`
export const Input = styled.input`
  border: 1px solid #c3cad9;
  height: 50px;
  border-radius: 5px;
  width: 100%;
  padding-left: 15px;
  outline: none;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
`
export const LoginBtn = styled.button`
  background-color: #1565d8;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 15px;
  font-size: 20px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'roboto';
  font-size: 14px;
  margin-top: 3px;
  text-align: center;
`
