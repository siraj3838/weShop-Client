import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";

const useAdminOrder = () => {
    const { user } = useContext(AuthContext);
    const myAxios = useAxios();
    const [asc, setAsc] = useState(false)
    const { data: orders = [], refetch } = useQuery({
        queryKey: ["userAsc", user?.email, asc],
        queryFn: async () => {
            const res = await myAxios.get(`/orders?sort=${asc ? '' : 'asc'}`);
            return res.data;
        }
    })
    return [orders, refetch]
};

export default useAdminOrder;