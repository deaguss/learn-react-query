import { useInfiniteQuery } from 'react-query'
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

export async function FetchUserData({ pageParam = 1}) {
    const  response = await axios.get(`http://localhost:5000/users?_limit=2&_page=${pageParam}`)
    return response.data
}

export const useLoadMore = () => {
    return useInfiniteQuery<Users[] , CustomError>(['user-data'],  FetchUserData, {
        getNextPageParam: (_lastPage, pages) => {
            if(pages.length < 5){
                return pages.length + 1
            }else{
                return undefined
            }
        }
    }
    )
}