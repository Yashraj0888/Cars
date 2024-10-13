"use client"

import React from 'react'
import Image from 'next/image'
import { CustomButtonPropes } from '@/types'

const CustomButtom = ({title,containerStyles,handleClick,btnType}:CustomButtonPropes) => {
  return (
    <div>
      <button 
      disabled={false}
      type={btnType||'button'}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}>

        <span className={`flex-1`}>
          {title}

        </span>
       
      </button>
    </div>
  )
}

export default CustomButtom
