import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import useConversation from "../zustand/useConversation";
const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { selectedUser, messages, setMessages } = useContext(AuthContext);

    const GetMessage = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://realtime-chatapp-tttr.onrender.com/message/get/${selectedUser._id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages(data)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, GetMessage, messages, setMessages };
};
export default useGetMessage;

