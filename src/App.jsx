import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTask from "./components/AddTask";
import Filters from "./components/Filters";
import TaskCards from "./components/TaskCards";
import TaskCardDataProgress from "./TaskCardDataProgress";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AddTask />
      <Filters />
      <TaskCards />
      <TaskCardDataProgress />
    </>
  );
}

export default App;
