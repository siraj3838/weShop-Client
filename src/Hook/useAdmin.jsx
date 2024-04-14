import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "./useAxios";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const myAxios = useAxios();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'admin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await myAxios.get(`/adminUser/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;