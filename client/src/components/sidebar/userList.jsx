import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';

export default function UserList({ users }) {
    const { setSelectedUser } = useContext(AuthContext)
    return (
        <div className='flex flex-col overflow-y-auto w-full'>
            {
                users.map(
                    (data, key) => {
                        return (
                            <div className="flex items-center hover:bg-slate-200 gap-8 rounded-md cursor-pointer p-4" title='tap to chat' key={key} onClick={() => { setSelectedUser(data) }}>
                                <div className="avatar" key={key}>
                                    <div className="ring-primary ring-offset-base-100 h-12 w-12 rounded-full ring ring-offset-2">
                                        <img src={data.profilePic} alt='user avatar' />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-lg font-semibold text-black '>{data.name.length > 20 ? data.name.slice(0, 18) + ".." : data.name}</h2>
                                    <p><span>{data.email.length > 20 ? data.email.slice(0, 20) + ".." : data.email}</span></p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
