import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import uselogout from '../../hooks/useLogout';

export default function Topbar() {
    const { authUser, setAuthUser, selectedUser, openSidebar, setOpenSidebar } = useContext(AuthContext);
    const { Logout } = uselogout();

    return (
        <div className=' md:px-10 py-2 shadow'>
            <div className="navbar  bg-white ">
                <div className="flex-1 gap-3">
                    <span className=' md:hidden' onClick={() => { setOpenSidebar(!openSidebar) }}><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </span>
                    <span className="text-slate-500 font-semibold  text-xl">{selectedUser.name}</span>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={selectedUser.profilePic} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
