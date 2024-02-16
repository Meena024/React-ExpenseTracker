import React from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div>
        <label>Filter by Year</label>
        <select
          className="expenses-filter__control"
          value={props.selected}
          onChange={dropdownChangeHandler}
        >
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default ExpenseFilter;
