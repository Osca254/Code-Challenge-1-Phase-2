import React, { useState } from "react";

function AddTransactionForm({addTransaction}) {
  const [transactionData, setTransactionData] = useState({
    date : '',
    description : "",
    category : "",
    amount : ''
  })
  function handleChange(event){
    setTransactionData({...transactionData,[event.target.name]: event.target.value,});
  }
  console.log(transactionData)
  function handleSubmission(event){
event.preventDefault()
fetch(' http://localhost:8001/transactions',{
  method : 'POST',
  headers :{
    "Content-Type": "application/json"
  },
  body : JSON.stringify(transactionData)
}).then(res => res.json())
.then(data => addTransaction(data))
  setTransactionData({date : '',
  description : "",
  category : "",
  amount : ''})
}
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={transactionData.date}  onChange={handleChange}/>
          <input type="text" name="description" value={transactionData.description} placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" value={transactionData.category} placeholder="Category" onChange={handleChange} />
          <input type="number" name="amount" value={transactionData.amount} placeholder="Amount" step="0.01"  onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit" onClick={handleSubmission}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
