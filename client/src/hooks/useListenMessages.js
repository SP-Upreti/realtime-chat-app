import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../context/socketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from "/message.mp3"

export default function useListenMessages() {
    const { socket } = useContext(SocketContext);
    const { messages, setMessages } = useConversation();


    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            {
                const sound = new Audio(notificationSound)
                sound.play();
                setMessages([...messages, newMessage])
            }
        }
        )
        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}

