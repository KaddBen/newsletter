import React from 'react'
import './SubscribtionSuccess.scss'
import iconSuccess from '../../images/icon-success.svg'

const SubscribtionSuccess = (props) => {
  return (
    <>
    <img src={iconSuccess} alt='success' className='icon_success'/>
    <h2 className='title_subscribed'>Thanks for Subscribing !</h2>
    <p className='confirmation_message'>A confirmation email has been sent to <span style={{fontWeight:"bold"}}>ash@loremcompany.com</span>. Please
    open it and click the button inside to confirm your subscription
    </p>
    <button  className='dismiss_button' onClick={props.function}>Dismiss message</button>
    </>
  )
}

export default SubscribtionSuccess