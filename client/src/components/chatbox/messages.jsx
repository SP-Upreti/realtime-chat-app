import React, { useContext, useEffect, useRef } from 'react';
import useGetMessage from '../../hooks/useGetMessage';
import { AuthContext } from '../../context/authContext';

export default function Messages() {
    const { GetMessage } = useGetMessage();
    const { selectedUser, messages } = useContext(AuthContext);
    const { authUser } = useContext(AuthContext);

    const messageEndRef = useRef(null);

    useEffect(() => {
        const btn = document.querySelector('.sendBtn');
        btn.addEventListener('click', () => {
            setTimeout(() => {
                messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 1000);
        })
    }, [messages]);


    useEffect(() => {
        GetMessage();
    }, [selectedUser, messages]);

    const sender_ID = authUser._user._id;

    return (
        <div className="p-1 sm:p-4 overflow-auto h-[70vh] sm:h-[75dvh]">
            {/* Apply slice to the messages array here */}
            {messages.map((data, key) => (
                <div key={key} className="mb-4">
                    <div className="">
                        {data.messageId?.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`chat ${msg.senderId === sender_ID ? "chat-end" : "chat-start"}`}
                            >
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User avatar"
                                            src={
                                                msg.senderId === sender_ID
                                                    ? authUser._user.profilePic
                                                    : selectedUser.profilePic
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="chat-header flex flex-col gap-1">
                                    <time className="text-xs opacity-50">
                                        {new Date(msg.createdAt).toLocaleString()}
                                    </time>
                                    <span>
                                        {msg.senderId === sender_ID
                                            ? authUser._user.name
                                            : selectedUser.name}
                                    </span>
                                </div>
                                <div className="chat-bubble">{msg.message}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* Reference for scrolling to the bottom */}
            <div ref={messageEndRef} />
        </div>
    );


}
