import React from 'react'
import './Card.css'
import { Icon } from '../IconsSVG/Icon';

export const Card = ({card, onRotateCard}) => {
  let degs = !card.rotate? "0deg":"180deg";
  return (
      card.enable?

      <div className='Card' style={{transform:"rotateY("+degs+")"}} onClick={onRotateCard}>  
        <div className='Face FrontFace'>
            ?
        </div>
        <div className='Face BackFace'>
            <Icon value={card.value}/>
        </div>
      </div>

      :

      <div className='Card' style={{transform:"rotateY("+degs+")"}}>  
        <div className='Face FrontFace'>
            ?
        </div>
        <div className='Face BackFace' style={{backgroundColor:"white"}}>
          <Icon value={card.value}/>
        </div>
      </div>
  )
}

