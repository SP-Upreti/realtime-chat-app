import { createContext, useContext, useEffect, useState } from "react"
import { AuthContext } from "./authContext";
import io from 'socket.io-client'

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useContext(AuthContext)

    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:8080", {
                query: {
                    userId: authUser._user._id
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close();
        }
    }, [authUser]);


    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}