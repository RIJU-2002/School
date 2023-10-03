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
                    <div className="col-span-7">
                        <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
                            <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                                <h3 className="text-3x1 md:text-4xl font-bold text-white mb-3 ls-51">Notice Board </h3>
                            </Fade>

                            <div>
                                <Fade direction={'up'} delay={1200} cascade damping={1e-1} triggerOnce={true}>
                                    <div className="relative bg-white focus-within:text-white flex shadow-fi">
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
                    <div className="col-span-5 relative hidden md:block">
                        <div className="absolute top-[20%] left-[20%]">
                            {/* <Image src={'/images/Admission/soup.svg'} alt="soup-image" width={626} height={602} className='-mt-24' /> */}
                            <Image src={'/images/Notice/notice3.png'} alt="admission-image" width={426} height={402} className='-mt-24' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Notice;