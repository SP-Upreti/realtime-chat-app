import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import uselogout from '../../hooks/useLogout';

export default function Topbar() {
    const { authUser, setAuthUser, selectedUser } = useContext(AuthContext);
    const { Logout } = uselogout();

    const handleClick = async () => {
        await Logout();
    }
    return (
        <div className='px-10 py-2 shadow'>
            <div className="navbar  bg-white ">
                <div className="flex-1">
                    <span className="text-slate-500 font-semibold  text-xl">{selectedUser.name}</span>
                </div>
                <div className="flex-none">
                    {/* <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={selectedUser.profilePic} />
                            </div>
                        </div>
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <span className="justify-between"> Profile<span className="badge">New</span></span>
                            </li>
                            <li>
                                <span>Settings</span>
                            </li>
                            <li onClick={handleClick}><Link to={'/login'} >Logout</Link></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
