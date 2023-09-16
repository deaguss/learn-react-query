"use client"

import { FC, Fragment, useState } from 'react'
import { useLoadMore } from '@/hooks/useLoadMore'

interface PaginateProps {
  
}

const LoadMore: FC<PaginateProps> = ({}) => {
    const { isLoading, data, isError, error , hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useLoadMore()

    if(isLoading){
        return <h5>Loading....</h5> 
    }

    if(isError){
        return <h5>{error.message}</h5>
    }
  return <div>
    {data?.pages.map((group, i) => {
        return (
            <Fragment key={i}>
                {group.map((data) => {
                    return(
                        <div className="" key={data.id}>
                            {data.first_name}
                            {data.first_name}
                            {data.email}
                        </div>
                    )
                })}
            </Fragment>
        )
    })}

    <button onClick={fetchNextPage} disabled={!hasNextPage} className='p-2 bg-slate-50'>Load More</button>
    <div className="">{isFetching && !isFetchingNextPage ? 'loading....' : ''}</div>
  </div>
}

export default LoadMore