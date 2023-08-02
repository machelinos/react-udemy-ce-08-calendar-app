import { useForm } from '../../hooks/useForm'
import './LoginPage.css'

const loginFields = {
  loginEmail: '',
  loginPassword: '',
}

const registerFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: '',
  registerPasswordConfirm: '',
}

export const LoginPage = () => {
  const {
    loginEmail,
    loginPassword,
    handleInputChange: handleLoginInputChange,
  } = useForm(loginFields)

  const {
    registerName,
    registerEmail,
    registerPassword,
    registerPasswordConfirm,
    handleInputChange: handleRegisterInputChange,
  } = useForm(registerFields)

  const handleLoginSubmit = (event) => {
    event.preventDefault()
    console.log({ loginEmail, loginPassword })
  }

  const handleRegisterSubmit = (event) => {
    event.preventDefault()
    console.log({
      registerName,
      registerEmail,
      registerPassword,
      registerPasswordConfirm,
    })
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="loginEmail"
                value={loginEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="loginPassword"
                value={loginPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Register</h3>
          <form onSubmit={handleRegisterSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="registerName"
                value={registerName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="registerEmail"
                value={registerEmail}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="registerPassword"
                value={registerPassword}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
                name="registerPasswordConfirm"
                value={registerPasswordConfirm}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Create account"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
