import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext';
import { toast } from 'react-toastify';

export default function Feedback({ onclose }) {

    const { authUser } = useContext(AuthContext)
    const LogedUser = authUser._user;

    const [result, setResult] = React.useState("");
    const [input, setInput] = useState('');

    const feedbackData = {
        "name": LogedUser.name,
        "email": LogedUser.email,
        "feedback": input
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData();
        formData.append("access_key", "93b5b259-1783-4066-a15d-5f24ac713049");
        formData.append("data", JSON.stringify(feedbackData));

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Feedback submitted")
            event.target.reset();
            onclose()
        } else {
            console.log("Error", data);
            toast.error("Feedback not submitted")
            setResult(data.message);
            onclose()
        }
    };

    return (
        <div className='fixed top-0 right-0 bg-black flex justify-center items-center bg-opacity-50 z-10 h-screen w-screen'>
            <form onSubmit={handleSubmit}>
                <div class=" border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm w-96  bg-white">
                    <h1 class=" py-2 text-xl font-bold  text-black flex  justify-between items-center w-full col-span-6 px-4">
                        <span>Send Feedback</span>
                        <button onClick={onclose}>
                            <span>
                                <svg width="20px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
                                </svg>
                            </span>
                        </button>
                    </h1>
                    <textarea placeholder="Your feedback..." value={input} onChange={(e) => { setInput(e.target.value) }} class="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"></textarea>
                    <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
                        </svg>
                    </button>
                    <button class="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 512 512">
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
                    </button>
                    <span class="col-span-2"></span>
                    <button type='submit' class="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                        <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"></path>
                            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" d="M10.11 13.6501L13.69 10.0601"></path>
                        </svg>
                    </button>

                </div>
            </form>
        </div>
    )
}
