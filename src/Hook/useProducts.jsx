import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useProducts = () => {
    const myAxios = useAxios();
    const { refetch, data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await myAxios.get('/products')
            return res.data;
        }
    });
    return [products, refetch]
};

export default useProducts;