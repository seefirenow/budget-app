import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";
const NewExpense = (props) => {
  const [isEditing, setIsEdinting] = useState(false);
  const saveExpenseDataHandler = (entredExpenseData) => {
    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEdinting(true);
  };

  const stopEditingHandler = () => {
    setIsEdinting(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new expense </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
