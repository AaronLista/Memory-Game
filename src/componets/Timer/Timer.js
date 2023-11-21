import React from 'react';
import { CardsContex } from '../Context/ContextCards';

export const Timer = () => {
    const {time} = React.useContext(CardsContex)
  return (
    <div className='Timer'>
        <span>{time.m<10? "0"+time.m: time.m}</span>
        :
        <span>{time.s<10? "0"+time.s:time.s}</span>
        :
        <span>{time.ms<10? "0"+time.ms:time.ms}</span>
    </div>
  )
}
