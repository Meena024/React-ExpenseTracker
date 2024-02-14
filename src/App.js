// import react from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expenses />
    </div>
  );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement('fieldset', {className: "app"},
  //   React.createElement('div',{},expenseItems))
  // );
};

export default App;
