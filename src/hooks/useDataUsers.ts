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

export async function FetchUserData() {
    const  response = await axios.get('http://localhost:5000/users')
    return response.data
}

export const useDataUsers = () => {
    return useQuery<Users[] , CustomError>('user-data', FetchUserData, {
        // enabled: false,
        onSuccess: (data) => {
            console.log(`berhasil fetching data`)
        },
        onError: (err) => {
            console.log(`terjadi error pada server: ${err}`)
        },
        // select: (data) => {
        //     const dataByEmail = data.map((user) => user.email)
        //     return dataByEmail
        // }
    }
    )
}