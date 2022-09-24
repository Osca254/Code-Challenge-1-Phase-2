import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactionsDetails,setTransactionDetails] = useState([])
  const [searchValue,setSearchValue] = useState('')
  useEffect((()=>{
fetch(' http://localhost:8001/transactions')
.then(response => response.json())
.then(data => setTransactionDetails(data))
  }),[])
  function addTransaction (transaction){
setTransactionDetails([...transactionsDetails,transaction])
  }
  function handleSearchChange(event){
setSearchValue(event.target.value)

  }
  console.log(searchValue)
  const searchTransactions = transactionsDetails.filter((transaction)=>
  transaction.description.toLowerCase().includes(searchValue.toLowerCase()))
  console.log(searchTransactions)
  return (
    <div>
      <Search handleSearchChange= {handleSearchChange}/>
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList searchTransactions = {searchTransactions} />
    </div>
  );
}

export default AccountContainer;
