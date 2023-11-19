import React from 'react'
import './Card.css'
import { Icon } from '../IconsSVG/Icon';

export const Card = ({card, onRotateCard}) => {
  let degs = !card.rotate? "0deg":"180deg";
  return (
      card.enable?

      <div className='Card' style={{transform:"rotateY("+degs+")"}} onClick={onRotateCard}>  
        <div className='Face FrontFace'>
            <Icon value="hippo"></Icon>
        </div>
        <div className='Face BackFace'>
            {card.value}
        </div>
      </div>

      :

      <div className='Card' style={{transform:"rotateY("+degs+")"}}>  
        <div className='Face FrontFace'>
            <Icon value="hippo"></Icon>
        </div>
        <div className='Face BackFace' style={{backgroundColor:"white"}}>
            done
        </div>
      </div>
  )
}

