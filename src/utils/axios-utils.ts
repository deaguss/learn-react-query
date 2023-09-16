import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const client = axios.create({ baseURL: `http://localhost:5000` });

export const request = async <T>(
  options: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    // Menambahkan header Authorization
    client.defaults.headers.common.Authorization = `Bearer token`;

    // Mengirim permintaan HTTP dan menangani respons
    const response = await client(options);
    return response;
  } catch (error) {
    // Menangani kesalahan
    throw error as AxiosError;
  }
};
