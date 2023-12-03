import React from 'react'


interface Props{
    onSelectCategory : (category:string) => void;
}



export const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <select className="form-select" onChange={(event)=> onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilties">Utilities</option>
        <option value="Entertainment">Entertainment</option>
    </select>
  )
}
