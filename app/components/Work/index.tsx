"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/images/Features/medal.png',
        heading: "Excellent Records",
        subheading: "Excellent records and received many rewards",
    },
    {
        imgSrc: '/images/Features/tree.png',
        heading: "Green Environment",
        subheading: "Green wrapped campus",
    },
    {
        imgSrc: '/images/Features/best.png',
        heading: "Best Teachers",
        subheading: "Best group of teachers for your children's development",
    },
    {
        imgSrc: '/images/Features/skill.png',
        heading: "Develop skills",
        subheading: "We will help your child to develop new skills",
    }

]

const Work = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="about-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-dblue text-lg font-semibold mb-3 ls-51 uppercase'>Features</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Why should you<br /> join us.</p>
                    </Fade>
                </div>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='work-img-bg rounded-full flex justify-center absolute top-[-50%] sm:top-[-40%] md:top-[-55%] lg:top-[-45%] left-[20%]'>
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={190} height={10} />
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Work;
