import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [eneteredTitle, setEnteredTitle] = useState("");
  const [eneteredAmount, setEnteredAmount] = useState("");
  const [eneteredDate, setEnteredDate] = useState("");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: eneteredTitle,
      amount: eneteredAmount,
      date: new Date(eneteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const cancelHandler = () => {
    setIsFormVisible(false);
  };

  const showFormHandler = () => {
    setIsFormVisible(true);
  };

  return (
    <div>
      {isFormVisible && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={eneteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={eneteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={eneteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      )}
      {!isFormVisible && (
        <div className="new-expense__actions">
          <button onClick={showFormHandler}>Add New Expense</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;
