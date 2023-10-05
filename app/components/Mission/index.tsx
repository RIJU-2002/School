"use client"
import Image from 'next/image';
import { Fade } from "react-awesome-reveal";


interface cardDataType {
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        
        heading: "To ensure a high quality education among the children.Apart from book.Knowlwdge,efforts are given to impart moral education among the learners so that their charecer are social responsibilities are formed nicely from the very beginning",
        subheading: "---1---",
    },
    {
        heading: "We are committed to provide a safe,secured and a vibrant learning environment and to promote excellence.Confidence and self esteem in every child.",
        subheading: "---2---",
    },
    
]

const Mission = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl py-40 px-6' id="mission-section">
                <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                        <h3 className='text-dblue text-2xl font-bold mb-3 ls-51 uppercase'>About us</h3>
                    </Fade>
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-lightgrey'>Our Mission and Vision</p>
                    </Fade>
                </div>


                <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-y-20 gap-x-5 mt-5'>
                    <Fade direction={'up'} delay={1000} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <p className='text-lg font-serif font-bold text-black text-center text-opacity-100'>{items.subheading}</p>
                                <h3 className='text-2xl text-black font-semibold text-center mt-10'>{items.heading}</h3>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Mission;