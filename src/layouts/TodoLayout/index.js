import { useState } from "react";
import { Outlet } from "react-router-dom";

const initialTodos = [
    {id: Math.random(), title:'Todo 1', text: 'Todo 1 text description', isCompleted: false},
    {id: Math.random(), title:'Todo 2', text: 'Todo 2 text description', isCompleted: true},
    {id: Math.random(), title:'Todo 3', text: 'Todo 3 text description', isCompleted: false},
]

function TodoLayout() {
    const [todos, setTodos] = useState(initialTodos)
    return(
        <div>
            <h1>TodoApp</h1>
            <hr/>

            <Outlet context={[todos, setTodos]}/>
        </div>
    );
}

export default TodoLayout;