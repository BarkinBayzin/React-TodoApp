import { useOutletContext, useParams } from "react-router-dom";

function UserDetail(){
    const {userId} = useParams();
    const users = useOutletContext();
    const user = users.find(user => user.id === Number(userId));
    // console.log(user);
    return(
        <div>
            <h2>{user.name} </h2>
        </div>
    );
}

export default UserDetail;