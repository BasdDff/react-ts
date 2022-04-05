import React, {FC} from 'react';
import {IUser} from "../types/types";
import {Link} from "react-router-dom";

interface UserItemProps {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: 15, border: "1px solid gray"}}>
            {user.id}. <Link to={`/users/${user.id}`}>{user.name}</Link> live in city {user.address.city} on street {user.address.street}
        </div>
    );
};

export default UserItem;