import React from 'react'
import DeleteUsers from "./DeleteUsers";
import UpdateUsers from "./UpdateUsers";
import ProfileDetail from "./ProfileDetail";
import Link from 'next/link';

type Props = {
    data: any
}

function ModelTable({ data }: Props) {
    const { id, first_name, last_name, email, ip_address } = data;
  return (
    <>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={id}>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"><Link href={`/${id}`}>{id || 'tidak ada'}</Link></td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{first_name || 'tidak ada'}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{last_name || 'tidak ada'}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{email || 'tidak ada'}</td>
            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{ip_address || 'tidak ada'}</td>
            <td className="py-4 px-6 text-sm font-medium text-right flex gap-2">
            <UpdateUsers {...data}/>
            <DeleteUsers {...data}/>
            <ProfileDetail {...data}/>
            </td>
        </tr>
      </tbody>
    </>
  )
}

export default ModelTable