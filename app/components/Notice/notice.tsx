"use client"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";



interface Notice{
    title:string;
    link:string;
}

const NoticeList: Notice[]=[
    {
        title: "Publishing new website for school",
        link: "/Pdf/evs.pdf"  //put the link from imgbb
    },
]
const Notice = () => {
    return (
        <div className='relative ' id="notice-section">
            <div className="mx-auto max-w-2xl bg-lightblue md:max-w-7xl mt-48 rounded-lg">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className="col-span-12">
                        <div className="hidden lg:block absolute top-[10%] right-[10%]">
                            
                            <Image src={'/images/Notice/notice3.png'} alt="admission-image" width={426} height={402} className='-mt-24' />
                        </div>
                        <div className="hidden md:block lg:hidden xs:hidden  absolute top-[20%] right-[10%]">
                            
                            <Image src={'/images/Notice/notice3.png'} alt="admission-image" width={226} height={202} className='-mt-24' />
                        </div>
                        <div className="m-20 lg:ml-20 lg:mt-20 lg:mb-20">
                            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-3x1 md:text-4xl font-bold text-white mb-3 ls-51">Notice Board </h3>
                            </Fade>

                            <div>
                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className="relative bg-white focus-within:text-white flex shadow-fi br-50">
                                        <div className="mt-5 mx-5 my-5 " >
                                            {NoticeList.map((items, i) => (
                                                <div className='p-8 relative ' key={i}>
                                                    <p className='text-lg font-normal text-red text-center text-opacity-100'>{i+1}. <Link href={items.link}> {items.title}</Link></p>
                                                    
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Fade>
                            </div>

                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    

                </div>
            </div>
        </div>
    )
}

export default Notice;

{/* <div className="col-span-2 relative hidden md:block">
                        <div className="absolute top-[20%]">
                            
                            <Image src={'/images/Notice/notice3.png'} alt="admission-image" width={426} height={402} className='-mt-24' />
                        </div>
                    </div> */}