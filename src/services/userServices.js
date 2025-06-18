import axios from "axios";
import axiosClient from "../utilities/http";

export async function getUsers() {
    try{
        const response = await axiosClient.get('/users')
        return response.data
    }
    catch(error){
        console.log(error)
    }
}

export async function getUserById(id) {
    try{
        const response = await axiosClient.get(`/users/${id}`)
        return response.data
    }
    catch(error){
        console.log(error)
    }
}
