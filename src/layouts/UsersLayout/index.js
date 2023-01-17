import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const baseUrl = "https://jsonplaceholder.typicode.com";
function UsersLayout(){
    const [users, setUsers] = useState(null);

    const fetchUsers= async () => {
        const response = await fetch(`${baseUrl}/users`);
        const data = await response.json();

        setUsers(data);
    };

    useEffect(() => {
        fetchUsers(); 
    }, []);

    return(
        <div>
            {users ? <Outlet context={users} /> : <p>...Loading</p>}
        </div>
    );
}

export default UsersLayout;