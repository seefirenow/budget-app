import React, { useState } from "react";
import CourseGoalList from "./CourseGoalList/CourseGoalList";
import CourseInput from "./CourseInput/CourseInput";
import Card from "../UI/Card/Card";
import "./Goals.css";

const Goals = () => {
  const [expenseGoals, setExpenseGoals] = useState([
    { text: "New computer", id: "g1" },
    { text: "New camera", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setExpenseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setExpenseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (expenseGoals.length > 0) {
    content = (
      <CourseGoalList items={expenseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <Card className="goals-wrap">
        <section id="goal-form">
          <CourseInput onAddGoal={addGoalHandler} />
        </section>
        <section id="goals">
          {content}
          {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
        </section>
      </Card>
    </div>
  );
};

export default Goals;
