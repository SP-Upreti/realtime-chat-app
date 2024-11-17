import React from 'react'
import Topbar from './topbar'
import InputBox from './inputBox'
import Messages from './messages'

function Chatbox() {
    return (
        <div className='w-full relative'>
            <Topbar />
            <Messages/>
            <InputBox />

        </div>
    )
}

export default Chatbox
