import React from 'react';
import './App.css';
import { CardsProvider} from './componets/Context/ContextCards';
import { CardsContainer } from './componets/CardsContainer/CardsContainer';
import { ModalMenu } from './componets/ModalMenu/ModalMenu';

function App() {

  return (
    <CardsProvider>
      <div className='App'>
        <h1>contador</h1>
        <CardsContainer></CardsContainer>
      </div>
      <ModalMenu>
      </ModalMenu>
    </CardsProvider>
  );
}

export default App;
