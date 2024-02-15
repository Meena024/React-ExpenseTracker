import NewExpense from "./components/New Expense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import "./AppExpenses.css";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "chennai",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "hyderabad",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Pune",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Noida",
    },
  ];

  const expenseItems = expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
      location={expense.location}
    />
  ));

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    expenseItems.push(expense);
    console.log(expenseItems);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className="expenses">{expenseItems}</Card>
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
