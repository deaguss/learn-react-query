"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

type Users = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
};

export default function DeleteUsers(user: Users) {
    const [modal, setModal] = useState(false);
    const[isMutating, setIsMutating] = useState(false);

    const router = useRouter();


    const handleDeleteUsers = async(userId: number) => {
            try {
                setIsMutating(true)
                await axios.delete(`http://localhost:5000/users/${userId}`)
                router.refresh();
                setIsMutating(false);
                setModal(false);
            } catch (error) {
                throw error
            }
        
    }
    

    const handleChange = () => {
        setModal(prev => !prev)
    }

  return (
    <div>

        <button className="text-red-600 dark:text-red-500 hover:underline" onClick={handleChange}>
            Delete
        </button>

        <input
            type="checkbox"
            checked={modal}
            onChange={handleChange}
            className="modal-toggle"
        />
        <div className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg flex justify-start" onClick={handleChange}>Are you sure delete this users?</h3>
                <div className="modal-action">
                    <button type="button" className='btn bg-blue-700 hover:bg-blue-800 hover:outline hover:outline-2 hover:outline-black' onClick={() => handleDeleteUsers(user.id)}>{isMutating ? 'loading...' : 'Delete'}</button>
                    <button type="button" className="btn bg-red-700 hover:bg-red-800 hover:outline hover:outline-2 hover:outline-black" onClick={handleChange}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
