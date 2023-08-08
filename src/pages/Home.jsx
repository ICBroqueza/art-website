import React from 'react'
import Button from '../components/Button'
import Footer from '../components/Footer'
// import Slide from 'react-reveal/Slide';
// import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
        <header className="flex flex-col md:flex-row md:text-left gap-[20px] w-full md:gap-0 md:relative items-center">
                {/* <Slide left duration={2000}> */}
                    <picture className="bg-[#151515] xl:pl-[32%] lg:pl-[28%]  xl:h-[700px]">
                        <source
                        media="(min-width: 1024px)"
                        srcSet="src\assets\desktop\image-hero@2x.jpg"
                        >
                        </source>
                        <source
                        media="(min-width: 640px)"
                        srcSet="src\assets\tablet\image-hero@2x.jpg"
                        >
                        </source>
                        <img className="md:max-h-[700px] lg:h-full lg:w-full" src="src\assets\mobile\image-hero@2x.jpg" alt=""></img>
                    </picture>
                {/* </Slide> */}
                <div className="px-[16px] lg:flex lg:left-40 lg:place-items-start md:absolute md:left-96">
                    {/* <Slide right duration={2000}> */}
                        <div className="w-full lg:text-[#FFFFFF] mt-[32px] text-[62px] md:text-[70px] lg:text-[96px] leading-[55px] md:leading-[70px] lg:leading-[96px] font-black text-heading">
                            <h1>MODERN</h1>
                            <h1>ART GALLERY</h1>
                        </div>
                        <div className="lg:place-self-start lg:w-[450px] xl:ml-[100px]">
                            <p className="text-body my-[30px] lg:mt-0">The arts in the collection of the Modern Art Gallery all started from a spark of inspiration. Will these pieces inspire you? Visit us and find out.</p>
                            <Button text={'Our Location'} page={"/location"}/>
                        </div>
                    {/* </Slide> */}
                </div>
        </header>
        
        {/* <Fade delay={1000} duration={2000}> */}
            <section className="my-[120px] px-[16px] md:px-[40px] lg:px-[165px] flex flex-col gap-4 items-center w-full">
            <div className="flex flex-col md:flex-row items-center xl:justify-between ">
                    <picture className="w-full md:order-2">
                        <source
                        media="(min-width: 1024px)"
                        srcSet="src\assets\desktop\image-grid-1@2x.jpg"
                        />
                        <source
                        media="(min-width: 640px)"
                        srcSet="src\assets\tablet\image-grid-1@2x.jpg"
                        />
                        <img className="md:h-[400px] md:w-[400px] lg:w-full object-cover" src="src\assets\mobile\image-grid-1@2x.jpg" alt=""/>
                    </picture>
                    <div className="md:pr-[70px] md:w-4/5 lg:2/5">
                        <h1 className="text-[50px] leading-[48px] my-[32px] md:my-0 font-black text-heading uppercase">Your Day at the Gallery</h1>
                        <p className="text-body mb-[32px] md:mb-0 md:mt-[24px]">Wander through our distinct collections and find new insights about our artists. Dive into the details of their creative process.</p>
                    </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row ">
                <div>
                    <picture>
                        <source
                        media="(min-width: 1024px)"
                        srcSet="src\assets\desktop\image-grid-2@2x.jpg"
                        />
                        <source
                        media="(min-width: 640px)"
                        srcSet="src\assets\tablet\image-grid-2@2x.jpg"
                        />
                        <img className="h-full w-full" src="src\assets\mobile\image-grid-2@2x.jpg" alt=""/>
                    </picture>
                </div>
                <div className="flex flex-col gap-4">
                    <picture className="">
                        <source
                        media="(min-width: 1024px)"
                        srcSet="src\assets\desktop\image-grid-3@2x.jpg"
                        />
                        <source
                        media="(min-width: 640px)"
                        srcSet="src\assets\tablet\image-grid-3@2x.jpg"
                        />
                        <img className="h-full w-full" src="src\assets\mobile\image-grid-3@2x.jpg" alt=""/>
                    </picture>
                    <div className="bg-[#151515] text-white px-[24px] md:px-[40px] py-[40px] h-full w-full flex flex-col justify-center">
                        <h1 className="text-[50px] leading-[48px] font-black text-heading my-[28px] uppercase">COME & BE INSPIRED</h1>
                        <p className="text-body font-light">We’re excited to welcome you to our gallery and see how our collections influence you.</p>
                    </div>
                </div>
            </div>
            </section>
        {/* </Fade> */}

        <Footer isHome={true}/>
    </>
  )
}

export default Home