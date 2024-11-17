import React from 'react'

export default function UserList() {
    return (
        <div className='flex flex-col overflow-y-auto w-full'>
            {
                [...Array(7)].map(
                    (data, key) => {
                        return (
                            <div className="flex items-center hover:bg-slate-200 gap-8 rounded-md cursor-pointer p-4" title='tap to chat' key={key}>
                                <div className="avatar" key={key}>
                                    <div className="ring-primary ring-offset-base-100 h-12 w-12 rounded-full ring ring-offset-2">
                                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt='user avatar' />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-lg font-semibold text-black '>Surendra Upreti</h2>
                                    <p><span>tap to chat</span></p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
