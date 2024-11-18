// import { json } from 'express';
import React, { useState } from 'react'
import { toast } from 'react-toastify';


export default function useSignUp() {

    const [loading, setLoading] = useState(false);

    const Register = async ({ name, email, gender, phone, password, confirmPassword }) => {
        const success = handleError({ name, email, gender, phone, password, confirmPassword });
        if (!success) return;
        setLoading(true)
        try {
            const res = await fetch("http://localhost:8080/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, gender, phone, password, confirmPassword }),
                credentials: 'include'
            });
            const data = await res.json();
            // console.log("success", data);
            data.success ? toast.success(data.message) : toast.error(data.message);
        }
        catch (err) {
            toast.error(err.message)
        }
        finally {
            setLoading(false);
        }
    }
    return { loading, Register }
}


function handleError({ name, email, gender, phone, password, confirmPassword }) {
    if (!name || !email || !gender || !phone || !password || !confirmPassword) {
        console.log("Fiends cannot be empty");
        toast.error("Fields cannot be empty");
        return false
    }

    if (password != confirmPassword) {
        toast.error("Password and confirm doesnot match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be minimum 6 character");
        return false
    }

    return true;
}