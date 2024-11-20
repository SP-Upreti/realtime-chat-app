import React, { useContext, useEffect } from 'react';
import useGetMessage from '../../hooks/useGetMessage';
import { AuthContext } from '../../context/authContext';

export default function Messages() {
    const { GetMessage, message } = useGetMessage();
    const { selectedUser, newMessage } = useContext(AuthContext);
    const { authUser } = useContext(AuthContext);


    useEffect(() => {
        GetMessage();
        console.log(message);
    }, [selectedUser, newMessage]);

    const sender_ID = authUser._user._id;

    return (
        <div className='p-4 overflow-auto h-[75dvh]'>
            {message.map((data, key) => (
                <div key={key} className="mb-4">
                    <div className="ml-4">
                        {data.messageId.map((msg, idx) => (
                            <div className={`chat ${msg.senderId === sender_ID ? "chat-end" : "chat-start"}`}>
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src={msg.senderId === sender_ID ? authUser._user.profilePic : selectedUser.profilePic} />
                                    </div>
                                </div>
                                <div className="chat-header flex flex-col gap-1">

                                    <time className="text-xs opacity-50">{new Date(msg.createdAt).toLocaleString()}</time>
                                    <span>{msg.senderId === sender_ID ? authUser._user.name : selectedUser.name}</span>
                                </div>
                                <div className="chat-bubble"> {msg.message}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
