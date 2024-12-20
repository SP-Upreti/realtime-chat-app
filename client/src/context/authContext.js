import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [openSidebar, setOpenSidebar] = useState(true);

    return <AuthContext.Provider value={{ authUser, setAuthUser, selectedUser, setSelectedUser, newMessage, setNewMessage, messages, setMessages, openSidebar, setOpenSidebar }}>{children}</AuthContext.Provider>;
};