"use client"

import Link from 'next/link'
import React from 'react'
import { useDataUserById } from '@/hooks/useDataUserById'

const page = ({ params } : { params: { slug: number }}) => {
    const { isLoading, data: dataUser, isError, error, isFetching } = useDataUserById(params.slug)

    // console.log({ dataUser })

    if(isLoading){
        return <h5>Loading....</h5> 
    }

    if(isError){
        return <h5>{error.message}</h5>
    }

  return (
    <>
    <div className="">
        <Link href={'/'}>Back</Link>
        <div className="">{dataUser?.id}</div>
        <div className="">{dataUser?.first_name}</div>
        <div className="">{dataUser?.last_name}</div>
        <div className="">{dataUser?.email}</div>
        <div className="">{dataUser?.ip_address}</div>
    </div>
    </>
  )
}

export default page