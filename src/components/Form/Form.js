import React, { useState } from 'react'
import "./Form.scss"
import Input from '../Input/Input'
import handleSubmit from './handleSubmit/handleSubmit'

const Form = (props) => {
  const [mailValue , setMailValue] = useState("")

  return (
    <form className='mail_form'>
    <h1 className='title_form'>Stay updated !</h1>
    <span className='join_msg'>Join 60,000+ product managers receiving monthly updates on :</span>
    <ul className='advantage_list'>
      <li className='advantage_list_item'><img className='check_icon' src={props.img} alt='icon'></img> Product discovery and building what matters</li>
      <li className='advantage_list_item'><img className='check_icon' src={props.img} alt='icon'></img> Measuring to ensure updates are a success</li>
      <li className='advantage_list_item'><img className='check_icon' src={props.img} alt='icon'></img> And much more !</li>
    </ul>
    <Input 
     type="text"
     id="mail"
     pattern="^([\w\.\-]+)+@([\w\-]+)((\.(\w){2,3})+)$"
     onChange={(e) => setMailValue(e.target.value)}
     value={mailValue} />
    <button type='submit' className='subscribe_button' onClick={(e) => handleSubmit(e,props)}>Subscribe to monthly newsletter</button>
    </form>
  )
}

export default Form