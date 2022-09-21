import axios from 'axios';

const instance = axios.create({
  baseURL: '/api',
});

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },
  async post<T>(url: string, data: any) {
    const response = await instance.post<T>(url, data);

    return response.data;
  },
  async patch<T>(url: string, data: any) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },
  async put<T>(url: string, data: any) {
    const response = await instance.patch<T>(url, data);

    return response.data;
  },
  async delete<T>(url: string) {
    const response = await instance.delete<T>(url);

    return response.data;
  },
};
