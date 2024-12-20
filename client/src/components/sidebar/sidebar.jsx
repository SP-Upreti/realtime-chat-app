import React, { useContext, useEffect, useState } from 'react';
import Searchbox from './searchbox';
import UserList from './userList';
import useGetUser from '../../hooks/useGetUser';
import Logout from './logout';
import { AuthContext } from '../../context/authContext';

export default function Sidebar() {
    const { GetUser, userData } = useGetUser();
    const { openSidebar, setOpenSidebar } = useContext(AuthContext); // Assuming this is available
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth); // Track window width
            if (window.innerWidth < 768 && openSidebar) {
                setOpenSidebar(false); // Close sidebar if width is less than 768
            }
        };

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Initial check for width
        handleResize();

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Dependency on `openSidebar` and `setOpenSidebar`

    // Fetch user data
    useEffect(() => {
        GetUser();
    }, [GetUser]);

    return (
        <div
            className={`h-dvh ${openSidebar ? 'flex' : 'hidden'} flex-col gap-2 justify-between py-4 border-r-2`}
        >
            <div>
                <Searchbox />
                <UserList users={userData} />
            </div>
            <Logout />
        </div>
    );
}
