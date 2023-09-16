"use client"

import { FC, useState } from 'react'
import { usePaginate } from '@/hooks/usePaginate'

interface PaginateProps {
  
}

const Paginate: FC<PaginateProps> = ({}) => {
    const [pageNumber, setPageNumber] = useState(1)
    const { isLoading, data, isError, error, isFetching, refetch  } = usePaginate({ pageNumber })

    if(isLoading || isFetching){
        return <h5>Loading....</h5> 
    }

    if(isError){
        return <h5>{error.message}</h5>
    }
  return <div>
    {data?.map((data) => {
        return <div className="" key={data.id}>
            <div className="">
                {data.first_name}
                {data.description}
            </div>
        </div>
    })}

    <button onClick={() => setPageNumber((pageNumber) => pageNumber - 1)} disabled={pageNumber === 1} className='p-2 bg-slate-50'>prev</button>
    &nbsp;
    <button className='p-2 bg-slate-50' onClick={() => setPageNumber((pageNumber) => pageNumber + 1)}>next</button>
  </div>
}

export default Paginate