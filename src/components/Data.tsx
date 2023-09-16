"use client"

import { useState } from "react";
import { useDataUsers } from "@/hooks/useDataUsers";
import AddUsers from "./AddUsers";
import ModelTable from "./ModelTable";



export default function Data() {
    const { isLoading, data, isError, error, isFetching, refetch  } = useDataUsers()

    if(isLoading || isFetching){
        return <h5>Loading....</h5> 
    }

    if(isError){
        return <h5>{error.message}</h5>
    }

  return (
    <div className=""> 
        <div className="max-w-6xl  mx-auto my-12">
        <div className="mb-2">
            <AddUsers />
        </div>
        <h1 className="">Data from Kominfo</h1>
        <button onClick={refetch}>show data</button>
            <div className="flex flex-col">
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
                                        action
                                    </th>
                                </tr>
                            </thead>
                            
                            {/* {data.map((dataByEmail) => {
                                return <h5 key={dataByEmail}>{dataByEmail}</h5>
                            })} */}

                            {data && data.map((data) => {
                                return <ModelTable data={data} />
                            })}  
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}