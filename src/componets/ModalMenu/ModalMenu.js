import React from 'react';
import ReactDOM  from 'react-dom';
import './ModalMenu.css'
import { CardsContex } from '../Context/ContextCards';

export const ModalMenu = ({children}) => {

  const {modalDisplay} = React.useContext(CardsContex)

  return ReactDOM.createPortal(
    <div className='Modal' style={modalDisplay? {display:"flex"}:{display:"none"}}>
        {children}
    </div>
    ,
    document.getElementById("modal")
  )
}
