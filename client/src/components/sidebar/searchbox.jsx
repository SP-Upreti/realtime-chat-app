import React from 'react'

export default function Searchbox() {

    return (
        <div className='border-b p-4 pb-10'>
            <form onSubmit={(e) => { e.preventDefault(); alert("user not found") }}>
                <label class="input input-bordered flex items-center gap-2 bg-white text-black">
                    <input type="text" class="grow" placeholder="Search" required />
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            class="h-6 w-6 opacity-80 cursor-pointer">

                            <path
                                fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </label>
            </form>

        </div>
    )
}
