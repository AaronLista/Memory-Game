import React from 'react';
import { CardsContex } from '../Context/ContextCards';
import './Timer.css'

export const Timer = () => {
    const {time} = React.useContext(CardsContex)
  return (
    <div className='Timer'>
        <span className='time'>{time.m<10? "0"+time.m: time.m}</span>
        :
        <span className='time'>{time.s<10? "0"+time.s:time.s}</span>
        :
        <span className='time'>{time.ms<10? "0"+time.ms:time.ms}</span>
    </div>
  )
}
