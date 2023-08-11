import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import './App.css'

function App() {

  const [taskItems, setTaskItems] = useState([
    {name: "mi primer tarae", done: true}
  ])

  function createNewTask(taskName) {
    setTaskItems([...taskItems, {name: taskName, done: false}])
  }

  return(
    <div className="App">
      <TaskCreator createNewtask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tareas pendientes</th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map(task => (
              <tr key={task.name}>
                <td>
                  {task.name}
                </td>
              </tr>
            ))
          } 
        </tbody>
      </table>

      
    </div>
  );
}
export default App
