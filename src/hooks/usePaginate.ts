import { useQuery } from 'react-query'
import axios from "axios";

interface CustomError {
    message: string;
  }

type Users = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;   
    description: string;
    location: string;
    password: string;
    mac_address: string;
    url: string;
};

export async function FetchUserData(pageNumber: any) {
    const  response = await axios.get(`http://localhost:5000/users?_limit=2&_page=${pageNumber}`)
    return response.data
}

export const usePaginate = ({ pageNumber }: any) => {
    return useQuery<Users[] , CustomError>(['user-data', pageNumber], () => FetchUserData(pageNumber), {
        keepPreviousData: true
    }
    )
}