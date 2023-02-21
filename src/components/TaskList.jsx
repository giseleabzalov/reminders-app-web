import { useEffect, useState } from "react";
import TaskCard from "./TaskCard";


export default function TaskList({ tasks, setTasks }) {

    useEffect( () => {
        fetch('https://todo-c9-api-ga.web.app/tasks')
        .then(res => res.json())
        .then(setTasks)
        .catch(alert)
    }, [] )

    const toggleDone = (task) => {
        const done = !!!task.done
        fetch(`https://todo-c9-api-ga.web.app/tasks/${task.taskId}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ done })
        })
        .then(res => res.json())
        .then(setTasks)
       .then( console.log(task))
        .catch(alert)
    }
    return (
        <article>
            <div>
                <h1>To Do List</h1>
            </div>
        {!tasks
            ? <h2>Loading...</h2>
            : <section>{tasks.map( (element) => (
            <TaskCard toggleDone={toggleDone} key={element.taskId} data={element} />
            ))}
            </section>
        }
        </article>
    )
}