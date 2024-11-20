import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState([])
    const { selectedUser } = useContext(AuthContext);

    const GetMessage = async () => {
        setLoading(true);
        try {
            const res = await fetch(`http://localhost:8080/message/get/${selectedUser._id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessage(data);
            console.log(message)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, GetMessage, message };
};
export default useGetMessage;

