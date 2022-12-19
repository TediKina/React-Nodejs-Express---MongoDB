import React from "react";
import "../NewGoal/NewGoal.css";

const NewGoal = (props) => {
  const addGoalHandler = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "New Goal!!!",
    };

    props.onAddGoal(newGoal);
  };

  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" placeholder="Goal Name" />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
