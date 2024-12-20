import React, { useContext, useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage';
import { AuthContext } from '../../context/authContext';

export default function InputBox() {
    const [input, setInput] = useState("");
    const { setNewMessage } = useContext(AuthContext);

    const { SendMessage, loading } = useSendMessage()
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input == "") return;
        await SendMessage(input);
        setInput("");

    }
    return (
        <div className='absolute bottom-0 p-2 sm:p-8 w-full bg-white'>
            <form method='post' onSubmit={handleSubmit}>
                <label className=" border-2 border-slate-300 rounded-md p-3  flex items-center gap-2">
                    <input type="text" value={input} onChange={(e) => { setInput(e.target.value); setNewMessage(input); }} className="grow bg-white text-black outline-none" placeholder="Your message.." autoFocus />
                    <button title='click to send message' className='sendBtn' disabled={loading}>
                        {loading ? (<span className="loading loading-spinner loading-xs"></span>) :
                            (<svg fill="currentColor" width="25" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m23.615.161c.228.152.376.408.376.698 0 .056-.006.111-.016.164l.001-.005-3.426 20.56c-.045.261-.204.478-.424.6l-.004.002c-.117.067-.257.107-.406.107-.003 0-.007 0-.01 0-.116-.003-.226-.027-.326-.069l.006.002-7.054-2.88-3.989 4.377c-.146.172-.362.281-.604.281-.009 0-.018 0-.026 0h.001c-.008 0-.017 0-.026 0-.102 0-.198-.02-.287-.056l.005.002c-.167-.061-.304-.17-.398-.311l-.002-.003c-.092-.135-.147-.302-.147-.482 0-.003 0-.005 0-.008v-6.047l-6.32-2.583c-.311-.107-.531-.395-.535-.736-.003-.028-.005-.06-.005-.092 0-.304.173-.567.427-.696l.004-.002 22.275-12.85c.122-.084.274-.135.437-.135.179 0 .344.061.475.162l-.002-.001zm-4.578 20.065 2.96-17.709-19.196 11.07 4.498 1.834 11.551-8.553-6.4 10.668z" /></svg>)
                        }

                    </button>
                </label>
            </form>
        </div>
    )
}


