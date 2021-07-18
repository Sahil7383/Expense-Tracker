import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
];

function App() {
  const [expenses, setExpanses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpanses((prevExpanses) => {
      return [expense, ...prevExpanses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Let's Get Started"),
//   React.createElement(Expenses, {items : expenses}),
// );

export default App;
