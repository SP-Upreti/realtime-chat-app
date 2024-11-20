import React, { useContext } from 'react'
import Topbar from './topbar'
import InputBox from './inputBox'
import Messages from './messages'
import { AuthContext } from '../../context/authContext'

function Chatbox() {
    const { selectedUser } = useContext(AuthContext)

    return (
        <div className='w-full relative'>
            {
                selectedUser ? (
                    <div className="">
                        <Topbar />
                        <Messages />
                        <InputBox />
                    </div>
                ) :
                    (
                        <div className=" h-full w-full flex justify-center items-center">
                            <p className='text-black text-3xl animate-bounce'>Select user to chat 😌</p>
                        </div>
                    )
            }

        </div>
    )
}

export default Chatbox
