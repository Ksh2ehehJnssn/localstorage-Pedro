import { useState } from "react";
import { App } from "App";

export const TaskCreator = (props) => {
    const [newTaskName, setNewtaskName] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        createNewTask(newTaskName);
        localStorage.setItem("Task", newTaskName);
        setNewtaskName("");
    }

    return (
        <form onSubmit={handlesubmit}>
            <input type="text"
                placeholder='Escriba una nueva tarea'
                value={newTaskName}
                onChange={(e) => setNewtaskName(e.target.value)}
            />
            <button>Guardar tarea</button>
        </form>
    )
}