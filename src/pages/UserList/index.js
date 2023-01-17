import { useOutletContext } from "react-router-dom";
import UserItem from "../../components/UserItem/UserItem";
function UserList() {
    const users = useOutletContext();
    return(
        <div> 
            <h2>User List</h2>
            <hr/>
            <div>
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UserList;