import React, { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";

export const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 3, category: "Groceries" },
    { id: 2, description: "bbb", amount: 3, category: "Utilties" },
    { id: 3, description: "ccc", amount: 3, category: "Utilties" },
    { id: 4, description: "ddd", amount: 3, category: "Entertainment" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses; 

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
