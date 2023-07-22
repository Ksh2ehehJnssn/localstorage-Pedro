import { useState } from 'react'

export const TaskCreator = ({ createNewTask }) => {
    const [newTaskName, setNewTaskName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        creatNewTask(newTaskName);
        localStorage.set.item("task", newTaskName);
        setNewTaskName("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='ingrese una nueva tarea'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>guradar tarea</button>
        </form>
    )
}