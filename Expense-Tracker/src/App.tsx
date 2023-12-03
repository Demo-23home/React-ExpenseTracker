import React, { useState } from 'react'
import ExpenseList from './components/ExpenseList'



export const App = () => {
 const [expenses, setExpenses] = useState([
    {id:1, description:"aaa", amount:3, category:"Utilties"},
    {id:2, description:"bbb", amount:3, category:"Utilties"},
    {id:3, description:"ccc", amount:3, category:"Utilties"},
    {id:4, description:"ddd", amount:3, category:"Utilties"},
  ])


  return (
    <div>
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}/>
    </div>
  )
}

export default App;