import React from 'react';
import "./Menu.css"
import { CardsContex } from '../Context/ContextCards';

export const Menu = () => {

    const {startGame} = React.useContext(CardsContex)
  return (
    <div className='Menu'>
        <button className='button start' onClick={()=>{startGame()}}>Start Game</button>
    </div>
  )
}
