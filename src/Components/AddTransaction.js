import React,{useState, useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
export const AddTransaction = ()=>{
  const [text,setText] = useState("");
  const [amount,setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);

  const submit=e=>{
    console.log(text+" "+amount);
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random()*100000000),
      text: text,
      amount: +amount
    }
    console.log(newTransaction);
    addTransaction(newTransaction);
  }
    return (
        <>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id='amount' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type ='submit' className="btn">Add transaction</button>
      </form>
        </>
    );
}