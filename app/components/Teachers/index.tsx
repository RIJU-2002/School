"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        profession: 'B.Sc Computer Trained(D.T.P)',
        name: 'Sri Swarup Kumar Roy',
        imgSrc: '/images/Expert/default.png',
    },
    {
        profession: 'Nursery Training',
        name: 'Sri Srikanta Pal',
        imgSrc: '/images/Expert/Srikanta Pal.png',
    },
    {
        profession: 'B.Com(Hons)Acc,I.T.I(Electrician)',
        name: 'Sri Hari Narayan Konar',
        imgSrc: '/images/Expert/Hari.png',
    },
    {
        profession: 'M.A.(Beng),B.Ed',
        name: 'Smt. Asima Dey',
        imgSrc: '/images/Expert/Asima.png',
    },
    {
        profession: 'B.A(Eng.) D.EL.Ed',
        name: 'Sri Chandan Sarkar',
        imgSrc: '/images/Expert/Chandan Sarkar.png',
    },
    {
        profession: 'B.Com(H),D.F.A,D.EL.Ed',
        name: 'Sri Shyamal Mondal',
        imgSrc: '/images/Expert/Shayamal.png',
    },
    {
        profession: 'B.A.(Hons in Bengali),B.LA.M,D.EL.Ed',
        name: 'Sri Swapan Pal',
        imgSrc: '/images/Expert/Swapan.png',
    },
    {
        profession: 'B.A.(Hons in Bengali),D.EL.Ed',
        name: 'Sri Avijit Samanta',
        imgSrc: '/images/Expert/default.png',
    },
    {
        profession: 'M.A(Beng.),D.EL.Ed',
        name: 'Sri Nil Kumar Dey',
        imgSrc: '/images/Expert/default.png',
    },
    {
        profession: 'B.A.(Hons in History),D.EL.Ed',
        name: 'Smt. Moutusi Halder',
        imgSrc: '/images/Expert/Moutusi.png',
    },
    {
        profession: 'B.A.,B.L.I.S,Basic Computer,D.EL.Ed',
        name: 'Sri Malay Kr. Dhara',
        imgSrc: '/images/Expert/Malay.png',
    },
    {
        profession: 'B.A(Eng),D.EL.Ed',
        name: 'Sri Bulbul Sanakar',
        imgSrc: '/images/Expert/default.png',
    },
    {
        profession: 'B.Com(Hons),D.EL.Ed',
        name: 'Sri Saumen Halder',
        imgSrc: '/images/Expert/Saumen.png',
    },
    {
        profession: 'M.A.(Beng),D.EL.Ed',
        name: 'Smt. Dorothy Hazra',
        imgSrc: '/images/Expert/Dorothy.png',
    },
    {
        profession: 'B.Com,(Hons in Accountancy),Computer Trained,B.L.I.S,D.EL.Ed',
        name: 'Sri Saikat Hazra',
        imgSrc: '/images/Expert/default.png',
    },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-10 sm:py-20 bg-lightblue" id="teacher-section">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <Fade direction={'up'} delay={400} cascade damping={1e-1} triggerOnce={true}>
                            <h2 className='text-dblue text-lg font-semibold mb-3 tracking-widest uppercase ls-51'>Teachers</h2>
                        </Fade>
                        <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
                                Let&apos;s meet the Teaching Staff.
                            </h3>
                        </Fade>
                    </div>

                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 my-10 text-center'>
                                    <div className="relative">
                                        <Image src={items.imgSrc} alt="gaby" width={162} height={162} className="inline-block m-auto" />
                                    </div>
                                    <h3>------------</h3>
                                    <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <h4 className='text-lg font-normal text-lightblack pt-4 pb-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
