import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({text, left, page}) => {
  return (
    <button className="flex items-center w-full text-heading h-[72px] ">
        <Link 
        className={`${left ? 'order-2' : ''} bg-[#151515] text-white px-[32px] text-[18px] h-full tracking-widest flex items-center uppercase`} 
        to={`${page}`}>
        {text}
        </Link>
        <i className={`${left ? 'bx-chevron-left' : 'bx-chevron-right'} bx  bx-sm bg-[#D5966C] p-[21px] text-white h-full flex items-center`}>
        </i>
    </button>
  )
}

export default Button