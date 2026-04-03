import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import "./App.css";
import Header from "./Components/Header";
import ShowTask from "./Components/ShowTask";

export default function App() {
  const savedTasks = localStorage.getItem("taskList");
  const [taskList, setTaskList] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [task, setTask] = useState({ name: "", completed: false });

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        // Agar ShowTask ko task ki zarurat nahi hai to ye line hata do
        task={task}
        setTask={setTask}
      />
    </div>
  );
}