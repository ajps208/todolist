import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const editTask = (index) => {
    setEditingIndex(index);
  };

  const saveEditedTask = (index) => {
    setEditingIndex(null);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteAllTask = () => {
    setTasks([]);
  };

  return (
    <div className="flex flex-col items-center bg-teal-500 w-full h-screen">
      <div className="w-2/6 mt-12 h-14 rounded-full bg-white flex justify-center items-center">
        <h1 className="text-4xl text-rose-500">TODO LIST</h1>
      </div>
      <div className="relative w-7/12 mt-12 h-16 rounded-full bg-white flex items-center">
        <input
          className="w-11/12 h-full ps-5 text-4xl rounded-full"
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <img
          className="w-16"
          src="https://static.vecteezy.com/system/resources/previews/016/314/339/original/red-circle-red-dot-icon-free-png.png"
          alt=""
        />
        <i
          className="absolute right-7 top-1/2 transform -translate-y-1/2 cursor-pointer fa-solid fa-plus fa-2x"
          onClick={addTask}
        ></i>
      </div>
      <div className="w-7/12 mt-5 h-16 rounded-full flex justify-between">
        <h1 className="w-40 text-2xl h-full rounded-full bg-white flex justify-center items-center">TASKS:</h1>
        <div className="w-1/12 bg-white rounded-full flex justify-center items-center" onClick={deleteAllTask}><i className="text-2xl fa-solid fa-trash"></i></div>
      </div>
      {tasks.map((task, index) => (
        <div className="w-7/12 mt-2 h-16 rounded-full bg-white flex flex-row justify-between" key={index}>
          <div className="flex justify-center items-center text-2xl">
            <span className="ms-2">{index + 1}</span>.{" "}
            {editingIndex === index ? (
              <input
                type="text"
                value={task}
                onBlur={() => saveEditedTask(index)}
                onChange={(e) => {
                  const updatedTasks = [...tasks];
                  updatedTasks[index] = e.target.value;
                  setTasks(updatedTasks);
                }}
              />
            ) : (
              <p className="ms-2">{task}
              </p>
            )}
          </div>
          <div className="flex justify-center items-center text-2xl">
            {editingIndex === index ? (
              <p className="me-4 text-rose-400" onClick={() => saveEditedTask(index)}>Save</p>
            ) : (
              <p className="me-4 text-green-400" onClick={() => editTask(index)}>Edit</p>
            )}
            <i className="me-4 fa-solid fa-xmark" onClick={() => deleteTask(index)}></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
