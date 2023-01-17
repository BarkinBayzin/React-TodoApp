import { useOutletContext, useParams } from "react-router-dom";

function TodoDetails() {
     const {todoId} = useParams(); //hooku ile id yakalıyorum
     const [todos] = useOutletContext(); //hooku ile todos arrayi yakalıyorum
     const todo = todos.find(todo => todo.id === Number(todoId))
    return(
        <div>
            <h3>{todo.title}</h3>
            <h2>{todo.text}</h2>
            <p>{todo.isCompleted ? 'Completed' : 'Not Completed'}</p>
            <hr/>
        </div>
    );
    }
    
    export default TodoDetails;