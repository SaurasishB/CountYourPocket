import React from 'react';
import './App.css';
import {Header} from './Components/Header';
import { Balance } from './Components/Balance';
import {IncomeExpence} from './Components/IncomeExpence';
import {TransactionList} from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';


import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpence/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;