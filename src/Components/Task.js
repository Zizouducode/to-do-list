import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [line, setLine] = useState([]);
  const [test, setTest] = useState([]);

  const handleTaskChange = (event) => {
    const value = event.target.value;
    setTask(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task) {
      const newTaskList = [...taskList];
      newTaskList.push(task);
      setTaskList(newTaskList);
      setTask("");

      const newLine = [...line];
      const bool = true;
      newLine.push(bool);
      setLine(newLine);
      console.log(test);
    }
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleCheck = (index) => {
    if (line[index] === true) {
      const newLine = [...line];
      const bool = false;
      newLine.splice(index, 1, bool);
      setLine(newLine);
      console.log(test);
      //   setLine(false);
    } else if (line[index] === false) {
      const newLine = [...line];
      const bool = true;
      newLine.splice(index, 1, bool);
      setLine(newLine);
      //   setLine(true);
    }
    console.log(line);
  };
  return (
    <div>
      {taskList.map((elem, index) => {
        return (
          <div className="task-list" key={index}>
            <input onClick={() => handleCheck(index)} type="checkbox" />
            <div
              className={
                line[index] === true ? "no-line-through" : "line-through"
              }
            >
              {elem}
            </div>
            <FontAwesomeIcon
              onClick={() => handleDeleteTask(index)}
              className="icon-small"
              icon="fa-trash-can"
            />
          </div>
        );
      })}
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="add-task"
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
