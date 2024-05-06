import React from 'react'
import { useNavigate } from 'react-router-dom'
import LogoImage from './images/huadian logo.png';

const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    if (loggedIn) {
        localStorage.removeItem("user")
        props.setLoggedIn(false)
    } else {
        navigate("/login")
    }
}


  return (
    <div className="mainContainer">
    <div className={'titleContainer'}>
      <div className="logo">
        <img src={LogoImage} alt="Logo" height="100"/>
      </div>
      <div>Welcome To Huadian Tender Billing System</div>
    </div>
    <div className='subtitle'>Power Smart</div>
    <div className={'buttonContainer'}>
      <input
        className={'inputButton'}
        type="button"
        onClick={onButtonClick}
        value={loggedIn ? 'Log out' : 'Log in'}
      />
      {loggedIn ? <div>Your email address is {email}</div> : <div />}
    </div>
  </div>
  )
}

export default Home