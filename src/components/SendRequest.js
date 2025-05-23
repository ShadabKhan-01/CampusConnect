"use client";
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const SendRequest = () => {

    const [isRequestSend, setisRequestSend] = useState(false)

    const handleRequest = () => {
        if (!isRequestSend) {
            setisRequestSend(!isRequestSend);
            toast.success('Request Sent!');
        }
        else {
            setisRequestSend(!isRequestSend);
            toast.error('Request Cancelled!');
        }
    }

    return (
        <div>
            <div><Toaster /></div>
            <button onClick={handleRequest}
                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto"
            >
                {isRequestSend ? <span className="truncate">Request Sent</span> : <span className="truncate">Connect</span>}
            </button>
        </div>
    )
}

export default SendRequest
