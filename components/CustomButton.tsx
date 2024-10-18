"use client" 

import React from 'react'
import Image from 'next/image'
import { CustomButtonPropes } from '@/types'

const CustomButton = ({title,containerStyles,handleClick,btnType,textStyle,rightIcon,isDisabled}:CustomButtonPropes) => {
  return (
    <div>
      <button 
      disabled={false}
      type={btnType||'button'}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}>

        <span className={`flex-1 ${textStyle}`}>
          {title}

        </span>
       
      </button>
    </div>
  )
}

export default CustomButton
