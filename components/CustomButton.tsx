"use client";

import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';


const CustomButton = ({ 
    title, 
    containerStyles, 
    handleClick, 
    btnType, 
    textStyle, 
    rightIcon, 
    isDisabled 
}: CustomButtonProps) => {
    return (
        <button 
            disabled={isDisabled} // Use isDisabled to control button state
            type={btnType || 'button'}
            onClick={handleClick}
            className={`custom-btn ${containerStyles} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} // Add styles for disabled state
        >
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6 ml-2'> {/* Add margin for spacing */}
                    <Image src={rightIcon} alt='arrow' fill className='object-contain' />
                </div>
            )}
        </button>
    );
};

export default CustomButton;
