import axios from 'axios'
import { URL } from '../constants'

const axiosInstance = axios.create({
    baseURL: URL.MAINURL,
})

async function GET<T>(endpoint: string, params?: object): Promise<T> {
    try {
        const response = await axiosInstance.get(`/${endpoint}`, { ...params })
        console.info("GET request endpoint >>> ", endpoint)
        console.info("GET request success >>> response : ", response.data)
        return response.data;
    } catch (error) {
        console.error('GET request error >>> ', error);
        throw error;
    }
}

async function POST<T>(endpoint: string, data?: object): Promise<T> {
    try {
        const response = await axiosInstance.post(`/${endpoint}`, { ...data })
        console.info("POST request endpoint >>> ", endpoint)
        console.info("POST request success >>> response : ", response.data)
        return response.data;
    } catch (error) {
        console.error('POST request error >>> ', error);
        throw error;
    }
}

async function PUT<T>(endpoint: string, data?: object): Promise<T> {
    try {
        const response = await axiosInstance.put(`/${endpoint}`, { ...data })
        console.info("PUT request endpoint >>> ", endpoint)
        console.info("PUT request success >>> response : ", response.data)
        return response.data;
    } catch (error) {
        console.error('PUT request error >>> ', error);
        throw error;
    }
}

async function DELETE<T>(endpoint: string, data?: object): Promise<T> {
    try {
        const response = await axiosInstance.delete(`/${endpoint}`, { ...data })
        console.info("DELETE request endpoint >>> ", endpoint)
        console.info("DELETE request success >>> response : ", response.data)
        return response.data;
    } catch (error) {
        console.error('DELETE request error >>> ', error);
        throw error;
    }
}

export { GET, POST, PUT, DELETE };