import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: 'https://we-shop-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;