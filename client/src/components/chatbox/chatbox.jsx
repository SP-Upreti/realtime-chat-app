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
                        <div className="hero  min-h-screen">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Select the user to start convesation</h1>
                                    <p className="py-6">
                                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
            }

        </div>
    )
}

export default Chatbox
