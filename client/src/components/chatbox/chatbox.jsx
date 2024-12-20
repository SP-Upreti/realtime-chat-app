import React, { useContext } from 'react'
import Topbar from './topbar'
import InputBox from './inputBox'
import Messages from './messages'
import { AuthContext } from '../../context/authContext'
import Sidebar from '../sidebar/sidebar'

function Chatbox() {
    const { selectedUser, setOpenSidebar, openSidebar } = useContext(AuthContext)

    return (
        <div className='w-full relative h-dvh'>
            {
                selectedUser ? (
                    <div className="">
                        <Topbar />
                        <Messages />
                        <InputBox />
                    </div>
                ) :
                    (
                        <div className="hero  min-h-screen relative">
                            <span className='absolute top-[2%] left-[2%] cursor-pointer md:hidden' onClick={() => { setOpenSidebar(!openSidebar); }}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg></span>
                            <div className="hero-content text-center">
                                <div className="md:max-w-md">
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
