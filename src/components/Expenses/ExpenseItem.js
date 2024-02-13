import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [amount, setTitle] = useState(props.amount);
  const ChangeAmountHandler = () => {
    setTitle(100);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        location={props.location}
        title={props.title}
      />
      <button onClick={ChangeAmountHandler}>Change Amount</button>
    </Card>
  );
};

export default ExpenseItem;
