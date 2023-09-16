"use client"

import { SyntheticEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAddData } from "@/hooks/useAddData";

export default function AddUsers() {
    const [first_name, setfirst_name] = useState('');
    const [last_name, setlast_name] = useState('');
    const [modal, setModal] = useState(false);
    const { mutate: addData, isLoading } = useAddData()

    const router = useRouter();

    const handlefirst_name = (input: string) => {
        setfirst_name(input)
    }

    const handlelast_name = (input: string) => {
        setlast_name(input)
    }

    const canSave = [first_name, last_name].every(Boolean);
    const postDataUsers = async(e: SyntheticEvent) => {
        e.preventDefault();
        
        if(canSave){
            try {
                const data = { first_name, last_name }
                addData(data)
                setfirst_name('');
                setlast_name('');
                setModal(false);
            } catch (error) {
                throw error
            }
        }
    }
    


    const handleChange = () => {
        setModal(prev => !prev)
    }

  return (
    <div>

        <button className="btn" onClick={handleChange}>
                Add New
            </button>

            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />

        <div className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg" onClick={handleChange}>Add New users</h3>
                <form onSubmit={postDataUsers}>
                    <div className="form-control">
                        <label className="label font-bold">First name</label>
                        <input
                            type="text"
                            className="input w-full input-bordered"
                            placeholder="first name"
                            value={first_name}
                            onChange={(e) => handlefirst_name(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Last name</label>
                        <input
                            type="text"
                            className="input w-full input-bordered"
                            placeholder="last name"
                            value={last_name}
                            onChange={(e) => handlelast_name(e.target.value)}
                        />
                    </div>
                    <div className="modal-action">
                        <button type="submit" className='btn bg-blue-700 hover:bg-blue-800 hover:outline hover:outline-2 hover:outline-black' disabled={!canSave}>{isLoading ? 'loading...' : 'submit'}</button>
                        <button type="button" className="btn bg-red-700 hover:bg-red-800 hover:outline hover:outline-2 hover:outline-black" onClick={handleChange}>
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
