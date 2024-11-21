import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import useConversation from "../zustand/useConversation";
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    // const [sentMessage, setSentMessage] = useState(null)
    const { selectedUser, messages, setMessages } = useContext(AuthContext);

    const SendMessage = async (message) => {
        setLoading(true);
        console.log("Receiver =", selectedUser._id)
        try {
            const res = await fetch(`https://realtime-chatapp-tttr.onrender.com/message/send/${selectedUser._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "message": message }),
                credentials: 'include'
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            console.log(data)
            // setMessages([...messages, message]);
            // toast.success("Message sent")
        } catch (error) {
            toast.error(error.message);
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    };

    return { loading, SendMessage, messages, setMessages };
};
export default useSendMessage;

