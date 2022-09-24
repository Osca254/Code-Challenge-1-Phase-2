import React from "react";

function Transaction({searchTransactions}) {
  
 
  return (
    searchTransactions.map((transaction)=>
    {
     return (<tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>)
    })
   
  );
}

export default Transaction;
