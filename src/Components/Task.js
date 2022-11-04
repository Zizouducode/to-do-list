import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleTaskChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTaskList = [...taskList];
    newTaskList.push(task);
    setTaskList(newTaskList);
    console.log(taskList);
  };

  const deleteTask = (event, index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
    // console.log(ta)
  };
  return (
    <div>
      {taskList.map((elem, index) => {
        return (
          <div key={index}>
            <input type="checkbox" />
            {elem}
            <FontAwesomeIcon
              onClick={() => deleteTask(index)}
              className="icon-small"
              icon="fa-trash-can"
            />
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleTaskChange}
          type="text"
          placeholder="new task"
          name="new-task"
          value={task}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default Task;
