import { useContext, useState } from "react";
// import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { AuthContext } from "../context/authContext";
const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useContext(AuthContext);

    const login = async (email, password) => {
        const success = handleInputErrors(email, password);
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
                credentials: 'include'
            });

            const data = await res.json();
            if (!data.success) {
                toast.error(data.message);
                // throw new Error(data.error);
                return;
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
};
export default useLogin;

function handleInputErrors(email, password) {
    if (!email || !password) {
        toast.error(email + password);
        return false;
    }

    return true;
}