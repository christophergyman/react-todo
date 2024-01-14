"use client";
import { useState } from "react";

function TaskItem() {
  const [task, setTask] = useState("I'm a default task!");

  function loadDataClick() {
    setTask("data loaded!");
  }

  return (
    <div className="font-bold">
      <button className="btn btn-neutral" onClick={loadDataClick}>
        {task}
      </button>
    </div>
  );
}

export default TaskItem;
