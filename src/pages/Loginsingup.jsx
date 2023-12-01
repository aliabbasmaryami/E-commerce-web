import React from 'react'
import '../pages/CSS/Loginsingup.css'

const Loginsingup = () => {
  return (
    <div className='Loginsingup'>
    <div className="Loginsingup-container">
      <h1>Sign Up</h1>
      <div className="Loginsingup-fields">
        <input type="text" placeholder='Your Name' />
        <input type="text" placeholder='Your Email' />
        <input type="password" placeholder='password' />
      </div>
      <button>Continues</button>
      <p className='Loginsingup-login'>Already have an Account?<span>Login Here</span></p>
      <div className="Loginsingup-agree">
        <input type="checkbox" name='' id='' />
        <p>By Continues i agree to the terms of use & privacy policy.</p>
      </div>
    </div>

    </div>
  )
}

export default Loginsingup