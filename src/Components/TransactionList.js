import React ,{useContext} from "react";
import {GlobalContext} from '../Context/GlobalState'
import { Tansaction } from "./Transaction";

export const TransactionList= ()=>{
  const {transactions} = useContext(GlobalContext);

    return (
        <>
         <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<Tansaction key={transaction.id} transaction={transaction}/>))}
      </ul>
      </>
    );
}