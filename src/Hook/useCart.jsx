import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import useAxios from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";

const useCart = () => {
    const myAxios = useAxios();
    const { user } = useContext(AuthContext);
    const { refetch, data: carts = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await myAxios.get(`/cartsUser/${user?.email}`)
            return res.data;
        }
    });
    return [carts, refetch]
};

export default useCart;