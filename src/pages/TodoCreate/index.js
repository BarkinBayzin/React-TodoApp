import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function TodoCreate() {
    const [todoForm, setTodoForm] = useState({title:'', text:''});
    const [todos, setTodos] = useOutletContext();
    const navigate = useNavigate();

    const changeTitle = event => {
        setTodoForm({...todoForm, title: event.target.value})
        //todoFormu ... ile dağıtıyorum, hangi propertyler varsa bunu ekleyelim, targetında nerden besleneceğini söyleyelim
    };

    const changeText = event => {
        setTodoForm({...todoForm, text: event.target.value})
        //todoFormu ... ile dağıtıyorum, hangi propertyler varsa bunu ekleyelim, targetında nerden besleneceğini söyleyelim
    };


    const createTodo = event => {
        event.preventDefault();
        const newTodo = {...todoForm, id:Math.random(), isCompleted: false};

        // console.log(newTodo);
        setTodos([...todos, newTodo]);
        navigate('/todos');
    };
    return(
        <div>
            <h2>Todo Create</h2>
            <hr/>

            <div>
                <form onSubmit={createTodo}>
                    <div>
                        <label htmlFor="title">Todo Title</label>
                        <input id="title" placeholder="Enter a todo title..." value={todoForm.title} onChange={changeTitle} />
                    </div>
                    <div>
                        <label htmlFor="text">Todo Text</label>
                        <textarea id="text" placeholder="Enter a todo text..." value={todoForm.text} onChange={changeText}></textarea>
                    </div>

                    <div>
                        <button type="submit">Add Todo</button>
                    </div>

                </form>
            </div>
        </div>
    );
}
    
export default TodoCreate;