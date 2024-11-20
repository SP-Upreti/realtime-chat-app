import React, { useState } from 'react'
import useLogout from '../../hooks/useLogout'
import Feedback from '../../modal/feedback';

export default function Logout() {
    const { loading, Logout } = useLogout();
    const [feedback, setFeedback] = useState(false);

    const handleClose = () => { setFeedback(false) }



    const handleClick = async () => {
        await Logout()
    }
    return (
        <div className='p-4 flex flex-col gap-4'>
            {feedback && (<Feedback onclose={handleClose} />)}
            <button
                disabled={loading}
                onClick={handleClick}
                className='border w-full p-2 rounded-md text-xl capitalize hover:bg-purple-500 hover:text-white transition-all'
            >{loading ? "Loging out..." : "logout"}</button>
            <button
                disabled={loading}
                onClick={() => { setFeedback(true) }}
                className=' w-full p-2 rounded-md text-xl capitalize  text-blue-500 font-semibold hover:animate-bounce transition-all'
            // onclose={onclose}

            >{loading ? "Loging out..." : "write a feedback"}</button>
        </div>
    )
}
