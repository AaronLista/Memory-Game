import React from "react";

const CardsContex = React.createContext();

function CardsProvider({children}){

    const values = ["cat","dog","dove","dragon","fish","frog","hippo","spider"];

    var initialDeck = []
    
    for (let index = 0; index < 16; index++) {
        let card = {
            id: index,
            rotate:false,
            enable:false,
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

    const [CardsToCompare, setCardsToCompare] = React.useState([]);

    const [modalDisplay, setModalDisplay] = React.useState(true);

    const [gameStatus,setGameStatus] = React.useState(false);

    const [time, setTime] = React.useState({ms:0, s:0, m:0});

    const [timer, setTimer] = React.useState()

    var UpdateMs = time.ms, UpdateS = time.s, UpdateM = time.m;


    const startGame = ()=>{
        resetTimer()
        setModalDisplay(false)
        rotateAllCards();
        setTimeout(()=>{
            StartTimer();
        },1000)        
    }

    const createNewDeck = ()=>{
        const values = ["cat","dog","dove","dragon","fish","frog","hippo","spider"];

        let newDeck = []
    
        for (let index = 0; index < 16; index++) {
            let card = {
                id: index,
                rotate:false,
                enable:false,
                value: ""
            }
            if(index<=7){
                card.value = values[index]
            } else {
                card.value = values[index-8]
            }
            newDeck.push(card)
        }

        newDeck.sort(()=>Math.random()-0.5)
        console.log(newDeck)
        setcards(newDeck)
    }

    const StartTimer = ()=>{
        runTimer();
        setTimer(setInterval(runTimer,10));
    }

    const runTimer = ()=>{
        UpdateMs++;
        if(UpdateS === 60){
            UpdateS = 0;
            UpdateM++;
        }
        if(UpdateMs === 100){
            UpdateMs = 0;
            UpdateS++;
        }
        return(setTime({ms:UpdateMs, s:UpdateS, m:UpdateM}))
    }

    const StopTimer = ()=>{
        clearInterval(timer)
    }

    const resetTimer = ()=>{
        setTime({ms:0, s:0, m:0})
        UpdateM = 0;
        UpdateS = 0;
        UpdateMs= 0;
    }

    const rotateCard = (id)=>{
        const NewCards = [...cards];
        const index = NewCards.findIndex((card)=>(card.id === id))
        NewCards[index].rotate = !NewCards[index].rotate
        setcards(NewCards)
    }


    const rotateAllCards = ()=>{
        for (let i = 0; i < 16; i++) {
            rotateCard(i)            
        }
        setTimeout(()=>{
            for (let i = 0; i < 16; i++) {
                rotateCard(i)      
                disableCard(i)    
            }
        },1000)
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
            setGameStatus(true)
            toggleModal()
            createNewDeck()
            StopTimer()
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
                modalDisplay,
                gameStatus,
                startGame,
                rotateAllCards,
                time,
                resetTimer,
                StopTimer
            }
        }>
            {children}
        </CardsContex.Provider>
    )
}

export {CardsContex, CardsProvider}

