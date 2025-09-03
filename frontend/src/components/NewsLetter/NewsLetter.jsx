import React from 'react'
import './NewsLetter.css'

 const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Suscribe to our newsletter and stay updated</p>
        <div>
            <input type='email' placeholder='your Email Id' />
        </div>
        <button>Suscribe</button>

    </div>
  )
}
export default NewsLetter