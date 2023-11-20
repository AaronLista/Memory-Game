import React from 'react'
import { Card } from '../Card/Card'
import { CardsContex } from '../Context/ContextCards'
import './CardsContainer.css'

export const CardsContainer = () => {
    const {cards,compareCards} = React.useContext(CardsContex);

  return (
    <div className='CardsContainer'>
        {cards.map((card, index)=>(
            <Card card={card} key={index} onRotateCard={()=>{compareCards(card.id)}}></Card>
        ))}
    </div>
  )
}
