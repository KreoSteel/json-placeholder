import { getUsers } from "../../services/userServices";
import { useEffect, useState } from "react";
import UserCard from "../../components/cards/UserCard/UserCard";
import List from "../../layouts/List/List";

export default function Users() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await getUsers()
        setUsers(response)
        console.log(response)
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            <h1>User</h1>
            <List items={users} Component={UserCard}></List>
        </div>
    );
}