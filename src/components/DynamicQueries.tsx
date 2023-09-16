"use client"

import { useQueries } from "react-query"
import axios from "axios"
import { FC } from 'react'

interface DynamicQueriesProps {
  ids: number[]
}

export async function fetchUserData(id: number) {
    return axios.get(`http://localhost:5000/users/${id}`)
        .then(response => response.data)
        .catch(error => {
            console.error(error);
            throw error;
        });
}


const DynamicQueries: FC<DynamicQueriesProps> = ({ ids }) => {
    const queryResult = useQueries(
        ids.map((id) => {
            return {
                queryKey: ['data-user', id],
                queryFn: () => fetchUserData(id)
            }
        })
    )

    console.log({ queryResult })
  return <div>DynamicQueries</div>
}

export default DynamicQueries