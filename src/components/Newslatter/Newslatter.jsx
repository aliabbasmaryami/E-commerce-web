import React from 'react'
import './Newslatter.css'

const Newslatter = () => {
  return (
    <div className='newslatter'>
        <h1>Get Exclusive Offer on your Email</h1>
        <p>Subscribe our newslatter and stay updated</p>
        <div>
            <input type="email" placeholder="your Email id" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newslatter