import { Link, useOutletContext } from "react-router-dom";
import s from './TodoList.module.css';

function TodoItem({todo}){
    return(
        <div className={s.todoCard}>
            <h4>{todo.title}</h4>
            <Link to={String(todo.id)} className={s.btn}>Details</Link> 
            {/*  URL string kabul ettiğin için to = {todo.id} şeklinde veremeyiz,
                 ya kullandığımız gibi string contructor kullanabiliriz =>  to={String(todo.id)} 
                 ya da back-tick içerisinde yazabiliriz => to = {`${todo.id}`}*/}
        </div>
    );
}


function TodoList() {
    const [todos] = useOutletContext();
    return(
        <div>
            <header className={s.header}>        
            <h2>Todo List</h2>
            <Link to='create' className={s.btn}>
                + Create
                </Link> {/* eğer '/' kullanırsam subroute'un fullpathini yazmam gerekir, 
                            eğer '/' kullanmazsak yazmam gerekmez, bulunduğum konuma göre realitive path yazabilirim  
                            Önemli !! */}
            </header>

            <div className={s.todoGrid}>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;