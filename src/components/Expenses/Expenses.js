import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = (filteredYear=='all')?(props.expenseList):(props.expenseList.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  }))

  let expensesContent = <p style={{color: 'white'}}>No expenses found!</p>;
  if(filteredExpenses.length>0){
    expensesContent = filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpenseFilter>
      {expensesContent}
    </Card>
  );
}

export default Expenses;
