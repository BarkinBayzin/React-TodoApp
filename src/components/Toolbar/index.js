import { Link } from 'react-router-dom'
import s from './Toolbar.module.css'

const links = [
    {label: 'Home', to:'/'},
    {label: 'About', to:'/about'},
    {label: 'Users', to:'/users'},
    {label: 'Todos', to:'/todos'},
]

function Toolbar(){
    return(
        <nav className={s.toolbar}>
            <Link to='/' className={s.brandLogo}>Router App</Link>

            <ul className={s.toolbarList}>
                {/* <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='/'>Home</Link>
                </li>

                <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='/About'>About</Link>
                </li>

                <li className={s.toolbarItem}>
                    <Link className={s.toolbarLink} to='/Users'>Users</Link>
                </li> 
                

                before array  */
                
                }
                

                {links.map(link => (
                    <li className={s.toolbarItem} key={link.to}>
                        <Link className={s.toolbarLink} to={link.to}>
                            {link.label}
                        </Link>
                    </li>
                ))}
                
            </ul>
        </nav>
    )
}

export default Toolbar;