import React, {FC, useEffect} from 'react';
import {IUser} from "../types/types";
import List from "../components/List";
import UserItem from "../components/UserItem";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../redux/actions/user";
import {useActions} from "../hooks/useActions";

const UsersPage: FC = () => {

    // const [users, setUsers] = useState<IUser[]>([])
    //
    // useEffect(() => {
    //     getUsers()
    // }, [])
    //
    // async function getUsers() {
    //     try {
    //         const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
    //         setUsers(response.data)
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    const {users, error, loading} = useTypedSelector(state => state.user)

    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
    );
};

export default UsersPage;