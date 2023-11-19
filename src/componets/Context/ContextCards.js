import React from "react";

const CardsContex = React.createContext();

function CardsProvider({children}){

    var initialDeck = [
        {
            id: 1,
            rotate:false,
            enable:true,
            value: "A"
        },
        {
            id: 2,
            rotate:false,
            enable:true,
            value: "A"
        },
        {
            id: 3,
            rotate:false,
            enable:true,
            value: "B"
        },
        {
            id: 4,
            rotate:false,
            enable:true,
            value: "B"

        }
    ]

    const [cards, setcards] = React.useState(initialDeck);

    const [CardsToCompare, setCardsToCompare] = React.useState([])

    const rotateCard = (id)=>{
        const NewCards = [...cards];
        const index = NewCards.findIndex((card)=>(card.id === id))
        NewCards[index].rotate = !NewCards[index].rotate
        setcards(NewCards)
    }

    const disableCard = (id)=>{
        const NewCards = [...cards];
        const index = NewCards.findIndex((card)=>(card.id === id))
        NewCards[index].enable = !NewCards[index].enable
        setcards(NewCards)
    }

    const compareCards = (id)=>{
        if((CardsToCompare.length < 2)&&!CardsToCompare.find((card)=>(card.id === id))){
            const newCompare = CardsToCompare;
            newCompare.push(cards.find((card)=>(card.id === id)))
            setCardsToCompare(newCompare)
            rotateCard(id)
            if(CardsToCompare.length === 2){
                if(CardsToCompare[0].value === CardsToCompare[1].value){
                    disableCard(CardsToCompare[0].id);
                    disableCard(CardsToCompare[1].id);
                    setCardsToCompare([])
                } else {
                    let card1 = CardsToCompare[0].id;
                    let card2 = CardsToCompare[1].id;
                    setCardsToCompare([])
                    setTimeout(()=>{
                        rotateCard(card1)
                        rotateCard(card2)
                    },1000)
                }
            }
        }
    }

    return(
        <CardsContex.Provider value={
            {
                cards, 
                compareCards
            }
        }>
            {children}
        </CardsContex.Provider>
    )
}

export {CardsContex, CardsProvider}

