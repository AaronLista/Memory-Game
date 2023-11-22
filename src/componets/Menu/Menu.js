import React from 'react';
import "./Menu.css"
import { CardsContex } from '../Context/ContextCards';
import { Timer } from '../Timer/Timer';

export const Menu = () => {

    const {startGame,gameStatus} = React.useContext(CardsContex)
  return (
    <div className='Menu'>
        {gameStatus?
          <>
          <h2>YOU WON!</h2>

          <Timer></Timer>
          </>
          :
          <h2>Ready?</h2>
        }
        <button className='button start' onClick={()=>{
          startGame()
          }}>Start Game</button>
    </div>
  )
}
