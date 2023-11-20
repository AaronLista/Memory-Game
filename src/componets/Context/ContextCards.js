import React from "react";

const CardsContex = React.createContext();

function CardsProvider({children}){

    const values = ["cat","dog","dove","dragon","fish","frog","hippo","spider"];

    var initialDeck = []

    for (let index = 0; index < 16; index++) {
        let card = {
            id: index,
            rotate:false,
            enable:true,
            value: ""
        }
        if(index<=7){
            card.value = values[index]
        } else {
            card.value = values[index-8]
        }
        initialDeck.push(card)
    }

    initialDeck.sort(()=>Math.random()-0.5)

    const [cards, setcards] = React.useState(initialDeck);

    const [CardsToCompare, setCardsToCompare] = React.useState([])

    const [modalDisplay, setModalDisplay] = React.useState(false)

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
                    countPairsCards()
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

    const countPairsCards = ()=>{
        const pairedCards = cards.filter((card)=>(!card.enable))
        if(pairedCards.length === cards.length){
            toggleModal()
        }
    }

    const toggleModal = ()=>{
        setModalDisplay(!modalDisplay)
    }

    return(
        <CardsContex.Provider value={
            {
                cards, 
                compareCards,
                modalDisplay
            }
        }>
            {children}
        </CardsContex.Provider>
    )
}

export {CardsContex, CardsProvider}

