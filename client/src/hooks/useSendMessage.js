import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const [sentMessage, setSentMessage] = useState(null)
    const { selectedUser } = useContext(AuthContext);

    const SendMessage = async (message) => {
        setLoading(true);
        console.log("Receiver =", selectedUser._id)
        try {
            const res = await fetch(`http://localhost:8080/message/send/${selectedUser._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ "message": message }),
                credentials: 'include'
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            toast.success("Message sent")
            setSentMessage(data);
            console.log(message)
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, SendMessage, sentMessage };
};
export default useSendMessage;

