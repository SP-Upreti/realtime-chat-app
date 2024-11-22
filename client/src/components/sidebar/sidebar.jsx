import React, { useContext, useEffect, useState } from 'react'
import Searchbox from './searchbox'
import UserList from './userList'
import useGetUser from '../../hooks/useGetUser'
import Logout from './logout';
import { AuthContext } from '../../context/authContext';

export default function Sidebar() {
    const { GetUser, userData } = useGetUser();
    const { openSidebar } = useContext(AuthContext)
    useEffect(() => {
        GetUser()
    }, [userData])
    return (
        <div className='h-dvh  flex-col gap-2 justify-between   py-4 border-r-2 hidden md:flex' style={{ display: openSidebar ? "flex" : "" }}>

            <div className="">
                <Searchbox />
                <UserList users={userData} />
            </div>

            <Logout />
        </div>
    )
}
