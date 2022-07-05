import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import StatusLine from './components/StatusLine';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect( () => {

  } ,[]);

  const addEmptyTask = (status) => {
    
  }

  const addTask = (taskToAdd) => {
    
  }

  const deleteTask = (taskId) => {

  }

  const moveTask = (id, newStatus) => {

  }

  const saveTasksToLocalStorage = (tasks) => {

  }

  const loadTasksFromLocalStorage = () => {

  }

  return (
    <div className="App">
      <h1>Task Management</h1>
      <main>
        <section>
          <StatusLine
            task={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Backlog"
          >
          </StatusLine>
          <StatusLine
            task={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="In Progress"
          >
          </StatusLine>
          <StatusLine
            task={tasks}
            addEmptyTask={addEmptyTask}
            addTask={addTask}
            deleteTask={deleteTask}
            moveTask={moveTask}
            status="Done"
          >
          </StatusLine>
        </section>
      </main>
    </div>
  );
}

export default App;
