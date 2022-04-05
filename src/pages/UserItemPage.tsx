import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

type QuizParams = {
    userId: string;
};

const UserItemPage: FC = () => {

    const {userId} = useParams<QuizParams>()
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null)

    useEffect(() => {
        if (userId) {
            getUser(userId)
        }
    }, [userId])

    async function getUser(userId: string) {
        const response = await axios.get<IUser | null>(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setUser(response.data)
    }

    return (
        <div>
            <button onClick={() => navigate(`/users`)}>Back</button>
            User Page {user?.name}
        </div>
    );
};

export default UserItemPage;