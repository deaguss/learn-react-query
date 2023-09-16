import { request } from '@/utils/axios-utils';
import { useMutation, useQueryClient } from 'react-query';

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
}

const addData = async (data: UserData) => {
  try {
    const response = await request({ url: '/users', method: 'post', data })
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const useAddData = () => {
  const queryClient = useQueryClient();

  return useMutation(addData, {
    // saat submit data baru data lama akan difetching dengan data baru
    // onSuccess: (newData) => {
    //   queryClient.setQueryData<UserData[]>('user-data', (oldData) => {
    //     if (!oldData) return [newData];
    //     return [...oldData, newData];
    //   });
    // },
    onMutate: async (newData) => {
        await queryClient.cancelQueries('user-data');
        const prevData = queryClient.getQueryData<UserData[]>('user-data');
        queryClient.setQueryData<UserData[]>('user-data', (oldData) => {
          if (!oldData) return [newData];
          return [...oldData, { id: oldData.length + 1, ...newData }];
        });
        return { prevData };
      },
      onError: (_error, _newData, context) => {
        if (context?.prevData) {
          queryClient.setQueryData<UserData[]>('user-data', context.prevData);
        }
      },
    onSettled: () => {
        queryClient.invalidateQueries('user-data')
    }
  });
};
