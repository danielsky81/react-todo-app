import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text:'asdasdasdasds asdsd',
      day: 'August 1st at 1:30pm',
      reminder: true
    },
    {
      id: 2,
      text:'asdsddasasa dfhfds asdsd',
      day: 'August 3rd at 5:00am',
      reminder: false
    }
  ]);

  const addTask = task => {
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}: task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks To Do'
      )}
    </div>
  );
}

export default App;
