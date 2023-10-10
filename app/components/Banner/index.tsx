"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';


const Banner = () => {

    return (
        <div id="home-section" className='bg-lightpink'>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6 py-5">

                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1'>

                    <div className='col-span-6 flex flex-col justify-center'>
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h1 className="text-4xl lg:text-5xl font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                                Welcome <br /> to the website of PARUL INDOBALA SISHU SHIKSHA SADAN
                            </h1>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <p className='text-grey lg:text-lg font-normal mb-10 lg:text-start text-center'>Managed by PARUL SHIKSHA-O-SAMAJ UNNAYAN PARISHAD <br /> (A Regd. Sociey-Regn, No.S/5469 of 1962-63 Act, XXI of 1860)<br/>Registered under Section 12A of the Income Tax 1961 </p>
                        </Fade>
                        <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                            <div className='md:flex align-middle justify-center lg:justify-start'>
                                <button className='text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 bg-blue lg:px-14 mr-6'><Link href='#admission-section'>Join us!</Link></button>
                                <button className='flex border w-full md:w-auto mt-5 md:mt-0 border-dblue justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-dblue hover:text-white hover:bg-blue'><Link href='#about-section'>Explore now</Link></button>
                            </div>
                        </Fade>
                    </div>

                    <div className='col-span-6 flex justify-center relative'>
                        <div className='flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute'>
                            <Image src={'/images/Banner/scholar.png'} alt="scholar-image" width={68} height={68} />
                            <p className='text-lg font-normal'>More than 500+ <br /> Successful Scholars</p>
                        </div>
                        <Image src="/images/Banner/Banner.png" alt="nothing" width={900} height={700} style={{borderRadius:'20px'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
