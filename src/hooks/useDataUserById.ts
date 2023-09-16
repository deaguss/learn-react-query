import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';

interface CustomError {
  message: string;
}

interface User {
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
}

export async function fetchUserDataById({ queryKey }: any): Promise<User> {
  const dataId = queryKey[1]
  const response = await axios.get<User>(`http://localhost:5000/users/${dataId}`);
  return response.data;
}

export const useDataUserById = (id: number) => {
  const queryClient = useQueryClient();

  return useQuery<User, CustomError>(['user-data', id], fetchUserDataById, {
    initialData: () => {
      const users = queryClient.getQueryData<User[]>('one-data');
      if (users) {
        const dataUser = users?.find((userData) => userData.id === id);
        if(dataUser){
            console.log(dataUser)
            return dataUser
        }
      }
      return undefined;
    },
  });
};
