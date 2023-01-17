import styles from './App.module.css';
import { Routes, Route} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Toolbar from './components/Toolbar';
import UserDetail from './pages/UserDetail';
import UsersLayout from './layouts/UsersLayout';
import UserList from './pages/UserList';
import TodoLayout from './layouts/TodoLayout';
import TodoList from './pages/TodoList';
import TodoDetails from './pages/TodoDetails';
import TodoCreate from './pages/TodoCreate';

function App() {
  return (
    //React Fragment == <>
    //If you need one more components to return, you could use react fragment for visible component (also can not seen in DOM tree)
    <> 
      <Toolbar/>

      <div className={styles.container}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='users' element={<UsersLayout/>}> {/* Nested Route */}
          {/*Dynamic url*/}
          <Route index element={<UserList/>} />
          <Route path=':userId' element={<UserDetail />} />  
        </Route>

        <Route path='todos' element={<TodoLayout/>}>
          <Route index element={<TodoList/>} />
          <Route path=':todoId' element={<TodoDetails/>}/>
          <Route path='create' element={<TodoCreate/>}/>
        </Route>

      </Routes>
      </div>
    </>    
  );
}

export default App;
