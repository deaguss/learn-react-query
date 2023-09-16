"use client"

import { useState } from "react";

type Users = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
    description: string;
    location: string;
    password: string;
    mac_address: string;
    url: string;
};


export default function ProfileUsers(userId: Users) {
    const [modal, setModal] = useState(false);
    
    const handleChange = () => {
        setModal(prev => !prev)
    }

  return (
    <div>

            <button className="text-yellow-600 dark:text-yellow-500 hover:underline" onClick={handleChange}>
                Details
            </button>

            <input
                type="checkbox"
                checked={modal}
                onChange={handleChange}
                className="modal-toggle"
            />

        <div className="modal">
            <div className="modal-box max-w-full">
            <h3 className="font-bold text-lg capitalize flex justify-start" onClick={handleChange}>Detail users {userId.first_name} {userId.last_name}</h3>
            <div className="flex flex-col py-4">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            First name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            last name
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Email
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Ip address
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Description
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Location
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Password
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Mac address
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Url
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 ">

                                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.id || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.first_name || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-wrap dark:text-white">{userId.last_name || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.email || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.ip_address || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.description || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.location || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.password || 'tidak ada'}</td>
                                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap dark:text-white">{userId.mac_address || 'tidak ada'}</td>
                                        
                                        <td align="left" className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-wrap  dark:text-white">{userId.url|| 'tidak ada'}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            <div className="modal-action">
                <button type="button" className="btn bg-red-700 hover:bg-red-800 hover:outline hover:outline-2 hover:outline-black" onClick={handleChange}>
                    Close
                </button>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}
