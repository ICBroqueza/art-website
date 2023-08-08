import React from 'react'
import Links from './Links'

const Footer = ({isHome}) => {
  return (
    <footer className={`${isHome ? 'bg-[#151515] text-white' : 'bg-[#D5966C] text-[#151515]'}  px-[32px] py-[48px] md:px[40px] lg:px-[165px] w-full`}>
    <div className=" flex flex-col md:flex-row md:justify-between md:items-start  gap-[38px] ">
        {isHome ? 
        <img className="w-[110px] h-[40px] object-fill" src='src\assets\logo-light.svg' alt=""></img> : 
        <img className="w-[110px] h-[40px] object-fill" src='src\assets\logo-dark.svg' alt=""></img>
        }
        <p className="text-body font-light max-w-[430px]">The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>

    <Links home={isHome}/>
    </div>
  </footer>
  )
}

export default Footer