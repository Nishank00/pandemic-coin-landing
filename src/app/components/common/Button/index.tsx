import React from 'react'
import { ImSpinner10 } from "react-icons/im";

interface ButtonProps{
    type?: "button" | "submit";
    onClick?: () => {};
    loading?: boolean;
    className?: string;
    label: string;
}   

const Button = ({type = 'button', onClick, loading = false, className, label}: ButtonProps) => {
  return (
    <button 
        disabled={loading} 
        style={{opacity: loading ? '.7' : '1', background: 'linear-gradient(207deg, rgb(0 0 0 / 26%), rgb(187 26 55))'}}
        type={type} 
        className={` px-[40px] py-[10px] capitalize  text-white rounded-[50px] transition-all cursor-pointer hover:shadow-lg ${className}`} 
        onClick={onClick} 
    >
        <span className="flex items-center gap-[3px]">
        {label} {loading ? <ImSpinner10 className='animate-spin' /> : ''}
        </span>
    </button>
  )
}

export default Button