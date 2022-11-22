import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //Change title when button is clicked
  const [title, setTitle] = useState(props.title);
  console.log("Expense item evaluated by react");
  // let title = props.title;

  //adding event handler
  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <li>
      <Card className="expense-item">
        {/* <ExpenseDate></ExpenseDate> */}
        <ExpenseDate date={props.date} />.
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
