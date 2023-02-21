import { useState } from 'react';
import TaskList from './components/TaskList.jsx'
import AddTask from './components/AddTask';
import './App.css';

export default function App() {
  const [ tasks, setTasks ] = useState([])

  return (
    <div className="App">
        <AddTask setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}



