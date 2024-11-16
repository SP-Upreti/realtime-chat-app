import React from 'react'
import Searchbox from './searchbox'
import UserList from './userList'

export default function Sidebar() {
    return (
        <div className='h-dvh flex flex-col gap-2 max-w-xs  py-10 border-r-2'>
            <Searchbox />
            <UserList />
        </div>
    )
}
