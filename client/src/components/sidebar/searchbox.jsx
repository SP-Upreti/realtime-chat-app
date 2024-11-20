import React from 'react'

export default function Searchbox() {

    return (
        <div className='py-2 px-5 pb-5'>
            <form onSubmit={(e) => { e.preventDefault(); alert("user not found") }}>
                <label className="input input-bordered flex items-center gap-2 bg-white text-black">
                    <input type="text" className="grow" placeholder="Search" required />
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-6 w-6 opacity-80 cursor-pointer">

                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </label>
            </form>

        </div>
    )
}
