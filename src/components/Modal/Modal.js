import React from 'react'
import { useState } from 'react';
import checkIcon from '../../images/icon-list.svg';
import Form from '../Form/Form'
import SubscribtionSuccess from '../SubscribtionSuccess/SubscribtionSuccess';
import './Modal.scss'

const Modal = () => {
const [open, setOpen] = useState(true);
function toggleClass() {
    setOpen(!open);
    console.log(open)
  }
  return (
    <>
    <main className={open ? 'modal' : 'subscribed'}>
    {open  ? <Form img={checkIcon} function={toggleClass}/> : <SubscribtionSuccess function={toggleClass}/>}
    <div className={`img_modal ${open ? '' : 'hidden'}`} >
    </div>
    </main> 
    </>  
  )
}

export default Modal