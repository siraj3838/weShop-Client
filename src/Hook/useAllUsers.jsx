import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useAllUsers = () => {
    const myAxios = useAxios();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await myAxios.get('/users')
            return res.data;
        }
    });
    return [users, refetch]
};

export default useAllUsers;