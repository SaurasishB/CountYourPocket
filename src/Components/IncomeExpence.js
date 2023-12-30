import React, {useContext} from "react";
import {GlobalContext} from '../Context/GlobalState';
 export const IncomeExpence = () =>{

  const { transactions } = useContext(GlobalContext);

    const imcomes = transactions.map(transaction=>transaction.amount>=0?transaction.amount:0);
    const totalIncome = imcomes.reduce((acc,item)=>(acc+=item),0).toFixed(2);

    const expences = transactions.map(transaction=>transaction.amount<0?transaction.amount:0);
    const totalExpences = expences.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    return (
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${totalIncome}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(totalExpences)}</p>
        </div>
      </div>
    );
 }