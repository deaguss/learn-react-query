"use client"

import { SyntheticEvent, useState } from "react";
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

export default function UpdateUsers(userId: Users) {
    const [firstName, setFirstName] = useState(userId.first_name);
    const [lastName, setLastName] = useState(userId.last_name);
    const [email, setEmail] = useState(userId.email);
    const [ipAddress, setIpAdress] = useState(userId.ip_address);
    const [modal, setModal] = useState(false);
    const[isMutating, setIsMutating] = useState(false);

    const router = useRouter();

    const handleFirstName = (input: string) => {
        setFirstName(input)
    }

    const handleLastName = (input: string) => {
        setLastName(input)
    }

    const handleEmail = (input: string) => {
        setEmail(input)
    }

    const handleIp = (input: string) => {
        setIpAdress(input)
    }

    const canSave = [firstName, lastName, email, ipAddress].every(Boolean);
    const UpdateDataUsers = async(e: SyntheticEvent) => {
        e.preventDefault();
        
        if(canSave){
            try {
                setIsMutating(true)
                await axios.patch(`http://localhost:5000/users/${userId.id}`,{ 
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    ip_address: ipAddress
                });
                setIsMutating(false);
                setFirstName('');
                setLastName('');
                setEmail('');
                setIpAdress('');
                router.refresh();
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

            <button className="text-blue-600 dark:text-blue-500 hover:underline" onClick={handleChange}>
                update
            </button>

            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />

        <div className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg capitalize" onClick={handleChange}>Update users {userId.first_name} {userId.last_name}</h3>
                <form onSubmit={UpdateDataUsers}>
                    <div className="form-control">
                        <label className="label font-bold">First name</label>
                        <input
                            type="text"
                            className="input w-full input-bordered"
                            placeholder="first name"
                            value={firstName}
                            onChange={(e) => handleFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Last name</label>
                        <input
                            type="text"
                            className="input w-full input-bordered"
                            placeholder="last name"
                            value={lastName}
                            onChange={(e) => handleLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Email</label>
                        <input
                            type="email"
                            className="input w-full input-bordered"
                            placeholder="email"
                            value={email}
                            onChange={(e) => handleEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label font-bold">Ip address</label>
                        <input
                            type="text"
                            className="input w-full input-bordered"
                            placeholder="Ip address"
                            value={ipAddress}
                            onChange={(e) => handleIp(e.target.value)}
                        />
                    </div>
                    <div className="modal-action">
                        <button type="submit" className='btn bg-blue-700 hover:bg-blue-800 hover:outline hover:outline-2 hover:outline-black' disabled={!canSave}>{isMutating ? 'loading...' : 'submit'}</button>
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
