import React from 'react';
import './App.css';
import { CardsProvider} from './componets/Context/ContextCards';
import { CardsContainer } from './componets/CardsContainer/CardsContainer';

function App() {

  return (
    <CardsProvider>
      <div className='App'>
        <CardsContainer></CardsContainer>
      </div>
    </CardsProvider>
  );
}

export default App;
