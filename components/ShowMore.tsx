"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import { CustomButtom } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore=({pageNumber,isNext}:ShowMoreProps)=>{
    
  const router = useRouter()
  const handleShowMore = () => {
    const limit =(pageNumber+1)*10;
    const newPathname=updateSearchParams("limit",`${limit}`)
    router.push(newPathname)
  } 
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {
            !isNext && (
                <CustomButtom
                title='Show More'
                btnType='button'
                containerStyles='bg-primary-blue
                rounded-full text-white'
                handleClick={handleShowMore}/>
            )
        }
      
    </div>
  )
}

export default ShowMore
