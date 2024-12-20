import { useState } from "react";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
const useGetUser = () => {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState([])

    const GetUser = async () => {

        setLoading(true);
        try {
            const res = await fetch("http://localhost:8080/user", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setUserData(data)
        } catch (error) {
            // toast.error(error.message);
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    };

    return { loading, GetUser, userData };
};
export default useGetUser;
