"use client"
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Admission = () => {
    return (
        <div className='relative' id="admission-section">
            <div className="mx-auto max-w-2xl bg-blue br-50 md:max-w-7xl mt-5 rounded-lg">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-3x1 md:text-4xl font-bold text-white mb-3 ls-51">For Admission </h3>
                            </Fade>
                            <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-2xl md:text-4xl font-normal text-white mb-8">
                                    Fill the form <br /> by clicking below.
                                </h3>
                            </Fade>

                            <div>
                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className="relative text-white focus-within:text-white flex flex-row-reverse shadow-fi rounded-full">
                                        <input type="Email address" name="q" className="py-6 sm:py-8 text-sm w-full text-black bg-gray-900 rounded-full pl-4 par-87 focus:outline-none focus:text-black" placeholder="@ enter your email-address" autoComplete="off" />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                                            <Link href='https://forms.gle/z7yWYUJ3kEpSZiFw5' target="_blank">
                                                <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                                                    <Image src={'/images/Admission/arrow.svg'} alt="inputicon" width={57} height={71}/>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className="col-span-5 relative hidden md:block">
                        <div className="absolute left-[20%]">
                            {/* <Image src={'/images/Admission/soup.svg'} alt="soup-image" width={626} height={602} className='-mt-24' /> */}
                            <Image src={'/images/Admission/admission.png'} alt="admission-image" width={426} height={402} className='-mt-24' />
                        </div>
                        <div className="absolute top-[78%] left-[30%]">
                            <Image src={'/images/Admission/book.png'} alt="book-image" width={100} height={80} />
                        </div>
                        <div className="absolute bottom-[10%] left-[0%]">
                            <Image src={'/images/Admission/yellow.svg'} alt="yellow-image" width={59} height={59} />
                        </div>
                        <div className="absolute bottom-[20%] right-[20%]">
                            <Image src={'/images/Admission/blue.svg'} alt="blue-image" width={25} height={25} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Admission;