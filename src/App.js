import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

function App() {
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
  ])

  const deleteTask = id => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        'No Tasks To Do'
      )}
    </div>
  );
}

export default App;
