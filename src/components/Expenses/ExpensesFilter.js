import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (events) => {
    props.onChangeFilter(events.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="Expense-filter__control">
        <label> Filter by Year</label>
        <select onChange={filterChangeHandler}>
          <option value="2022"> 2022</option>
          <option value="2021"> 2021</option>
          <option value="2020"> 2020</option>
          <option value="2019"> 2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
