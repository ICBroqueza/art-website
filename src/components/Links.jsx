import React from 'react'

const Links = ({home}) => {
  return (
    <div className="flex gap-[24px] items-center">
    <a className="" href="#">
        <i className={`${home ? 'hover:text-[#D5966C]' : 'hover:text-[#FFFFFF]'} bx bxl-facebook-square text-2xl`}></i>
    </a> 
    <a href="#">
        <i className={`${home ? 'hover:text-[#D5966C]' : 'hover:text-[#FFFFFF]'} bx bxl-instagram text-2xl`} ></i>
    </a>
    <a href="#">
        <i className={`${home ? 'hover:text-[#D5966C]' : 'hover:text-[#FFFFFF]'} bx bxl-twitter text-2xl`} ></i>
    </a>
</div>
  )
}

export default Links