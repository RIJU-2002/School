"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


const Gallery = () => {
    return (
        <div id="gallery-section">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24'>
                <div className="text-center">
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h2 className='text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51'>Our Gallery</h2>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                            Gallery of School Premises.
                        </h3>
                    </Fade>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6'>

                    <div className='col-span-6 flex justify-center overflow-hidden rounded-3xl'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4 rounded-3xl">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <Image src="/images/Gallery/schoolimage2.jpeg" alt="school-two" width={600} height={300} className="inner-img"/>
                            </div>
                            <div className='overflow-hidden row-span-2 rounded-3xl '>
                                <div className='rounded-3xl'>
                                    <Image src="/images/Gallery/Schoolimage6.jpg" alt="school-three" width={600} height={300} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='col-span-6 flex justify-center'>
                        <div className="grid grid-rows-1 grid-flow-row gap-4">
                            <div className="row-span-1 overflow-hidden rounded-3xl">
                                <Image src="/images/Gallery/schoolimage6.jpeg" alt="school-two" width={600} height={300} className="inner-img"/>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/Schoolimage5.jpg" alt="school-three" width={600} height={300} className="inner-img"/>
                                </div>
                                <div className='overflow-hidden rounded-3xl'>
                                    <Image src="/images/Gallery/schoolimage4.jpg" alt="school-four" width={600} height={300} className="inner-img"/>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Gallery;
