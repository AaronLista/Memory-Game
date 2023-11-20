import React from 'react';
import ReactDOM  from 'react-dom';
import './ModalMenu.css'

export const ModalMenu = ({children}) => {
  return ReactDOM.createPortal(
    <div className='Modal'>
        {children}
    </div>,
    document.getElementById("modal")
  )
}
