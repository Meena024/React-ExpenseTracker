import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      date: new Date(2021, 2, 12) ,
      location: "hyderabad"
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Pune"
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Noida"
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

  // const expenseItems = [];

  // for (let i = 0; i < expenses.length; i++) {
  //   expenseItems.push(
  //     <ExpenseItem
  //       key={expenses[i].id}
  //       title={expenses[i].title}
  //       amount={expenses[i].amount}
  //       date={expenses[i].date}
  //       location={expenses[i].location}
  //     />
  //   );
  // }
  return (
    <div>
      <h2>Let's get started!</h2>
      <fieldset className="app">
      <div>{expenseItems}</div></fieldset>
    </div>
  );
}

export default App;
