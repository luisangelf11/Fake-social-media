import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import '../components/Modal.css'

export default function Modal({CloseModal, openId, elementId, children}) {
    const handleStopModal =(e)=> e.stopPropagation();
  return (
    <article onClick={CloseModal} className={`modal ${openId !== null && openId === elementId ? "active" : "no-active"}`}>
        <div onClick={handleStopModal} className='modal-container'>
            <AiOutlineCloseCircle onClick={CloseModal} className='modal-close'/>
            {children}
        </div>
    </article>
  )
}
