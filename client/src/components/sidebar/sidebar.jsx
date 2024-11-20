import React, { useEffect } from 'react'
import Searchbox from './searchbox'
import UserList from './userList'
import useGetUser from '../../hooks/useGetUser'
import Logout from './logout';

export default function Sidebar() {
    const { GetUser, userData } = useGetUser();
    useEffect(() => {
        GetUser()
    }, [userData])
    return (
        <div className='h-dvh flex flex-col gap-2 justify-between   py-4 border-r-2'>

            <div className="">
                <Searchbox />
                <UserList users={userData} />
            </div>

            <Logout />
        </div>
    )
}
