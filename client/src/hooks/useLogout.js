import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const Logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://realtime-chatapp-tttr.onrender.com/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include'
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setAuthUser(null);
            localStorage.removeItem('chat-user')
            toast.success("Logout Success");
            navigate("/login")
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, Logout };
};
export default useLogout;

