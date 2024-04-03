import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useProfile = () => {
    const myAxios = useAxios();
    const {user} = useContext(AuthContext);
    const { refetch, data: currentUser = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await myAxios.get('/users')
            const findUser = res?.data?.find(api => api?.email == user?.email)
            return findUser;
        }
    });
    return [currentUser, refetch]
};

export default useProfile;