import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';


const Location = () => {
  return (
    <>
            <header className="relative w-full bg-[#151515]">
                <div className='absolute -top-1 md:left-10 lg:left-40'>
                    {/* <Slide left duration={2000}> */}
                        <Button text={'Back to Home'} left={true} page={'/'}/>
                    {/* </Slide> */}
                </div>
                <picture className="">
                    <source
                    media="(min-width: 1024px)"
                    srcSet="src\assets\desktop\image-map@2x.png"
                    />
                    <source
                    media="(min-width: 768px)"
                    srcSet="src\assets\tablet\image-map@2x.png"
                    />
                    <img src="src\assets\mobile\image-map@2x.png" alt="map" className="w-full"/>
                </picture>
            </header>
        
                <section className="w-full">
                <div className="bg-[#151515] text-white px-[24px] py-[48px] md:py-[80px] md:px-[40px] lg:px-[165px] flex flex-col md:flex-row justify-between lg:gap-20">
                    {/* <Slide left duration={2000} > */}
                        <h1 className="text-[50px] lg:text-[70px] leading-[48px] lg:leading-[70px] font-black text-heading my-[28px] uppercase md:w-[220px]">Our Location</h1>
                    {/* </Slide> */}
                    <div className="lg:px-[20px]">
                        {/* <Fade top cascade duration={2000}> */}
                            <h2 className="text-[32px] leading-[48px] font-black text-[#D5966C] text-heading my-[28px] uppercase">99 King Street</h2>
                        {/* </Fade> */}
                        {/* <Fade top cascade duration={2000} delay={1000}> */}
                            <ul className="text-body font-light max-w-[430px] mb-[32px]">
                                <li>Newport</li>
                                <li>RI 02840</li>
                                <li>United States of America</li>
                            </ul>
                        {/* </Fade> */}
                        {/* <Fade top cascade duration={2000} delay={1000}> */}
                            <p className="text-body font-light max-w-[430px]">Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.</p>
                        {/* </Fade> */}
                    </div>
                </div>
                </section>
        <Footer/>

    </>
  )
}

export default Location