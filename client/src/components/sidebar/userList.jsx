import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import { SocketContext } from '../../context/socketContext';

export default function UserList({ users }) {
    const { setSelectedUser, selectedUser } = useContext(AuthContext);
    const { onlineUsers } = useContext(SocketContext);

    const [selected, setSelected] = useState(8457987);


    return (
        <div className='flex flex-col overflow-y-auto w-full'>
            {
                users.map(
                    (data, key) => {
                        return (
                            <div key={key} className={`flex items-center hover:bg-blue-500 hover:text-white gap-8 rounded-md cursor-pointer userList p-4 ${selected === key ? "bg-blue-500 text-white" : ""} `} title='tap to chat' onClick={() => { setSelectedUser(data); setSelected(key); }}>
                                <div className="avatar" key={key}>
                                    <div className="ring-primary ring-offset-base-100 h-12 w-12 rounded-full ring ring-offset-2">
                                        <img src={data.profilePic} alt='user avatar' />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-lg font-semibold  flex gap-4 justify-start items-center '><span>{data.name.length > 20 ? data.name.slice(0, 18) + ".." : data.name} </span><span className={`flex ${onlineUsers.includes(data._id) ? "bg-green-500" : "bg-red-500"} h-4 w-4 rounded-full`}></span></h2>
                                    <p><span>{data.email.length > 20 ? data.email.slice(0, 20) + ".." : data.email}</span></p>
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}
