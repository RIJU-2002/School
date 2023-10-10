import Link from "next/link";
import Image from "next/image";


interface Link{
    name:string;
    link:string;
}
interface ProductType {
    id: number;
    section: string;
    link: Link[];
}

interface socialLinks {
    imgSrc: string;
    link: string;
    width: number;
}

const socialLinks: socialLinks[] = [
    {
        imgSrc: '/images/Footer/facebook.svg',
        link: 'https://www.facebook.com/groups/1588838934671239/',
        width: 10
    },
    {
        imgSrc: '/images/Footer/insta.svg',
        link: 'https://instagram.com',
        width: 14
    },
    {
        imgSrc: '/images/Footer/twitter.svg',
        link: 'https://twitter.com',
        width: 14
    },

]

const products: ProductType[] = [
    {
        id: 1,
        section: "School",
        link:[{name:'About',link:'#home-section'},
            {name:'Mission',link:"#mission-section"},
            {name:'Teachers',link:'#teacher-section'},
            {name:'History',link:'#history-section'}
        ],
    },
    {
        id: 2,
        section: "More",
        link:[{name:'Affiliates',link:'#home-section'},
            {name:'Management',link:"#expert-section"},
            {name:'Members',link:"#staff-section"}    
        ]
    }
    ,
    {
        id: 3,
        section: "Contact",
        //link: ['Curriculum','Support']
        link:[{name:'Address: VQ8X+372, Parul, Arambag, West Bengal',link:'https://www.google.com/maps/place/PARUL+INDOBALA+SISHU+SHIKSHA+SADAN/@22.8651294,87.7981474,15z/data=!4m6!3m5!1s0x39f813bfb68d7503:0xe9298b2159feb03d!8m2!3d22.8651294!4d87.7981474!16s%2Fg%2F11c5h2hy4s?entry=ttu'},
            {name:'Mobile:9153087276',link:''},
            {name:'Email:parulindobala@gmail.com',link:"https://mail.google.com/mail/?view=cm&fs=1&to=parulindobala@gmail.com"},
        ]
    }
]

const footer = () => {
    return (

        <div className="mx-auto max-w-2xl pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">

                {/* COLUMN-1 */}

                <div className='sm:col-span-6 lg:col-span-5'>
                    <div className="flex flex-shrink-0 items-center border-right">
                        <Image src="/images/Logo/Logo.png" alt="logo" width={56} height={56} />
                        <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                        PARUL INDOBALA SISHU SHIKSHA SADAN.
                        </Link>
                    </div>
                    <h3 className='text-textbl text-xs font-medium mt-5 mb-4 lg:mb-16'> Join us to see a <br /> brighter future of your children.</h3>
                    <div className='flex gap-4'>

                        {socialLinks.map((items, i) => (
                        <Link href={items.link} key={i}>
                            <div className="bg-white h-10 w-10 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-pink">
                                <Image src={items.imgSrc} alt={items.imgSrc} width={items.width} height={2} className="sepiaa" />
                            </div>
                        </Link>
                        ))}

                    </div>
                </div>

                {/* CLOUMN-2/3/4 */}


                {products.map((product) => (
                    <div key={product.id} className="sm:col-span-2">
                        <p className="text-black text-xl font-semibold mb-9">{product.section}</p>
                        <ul>
                            {product.link.map((link: Link, index: number) => (
                                <li key={index} className='mb-5'>
                                    <Link href={link.link} target="_blank" className="text-footerlinks text-base font-normal mb-6 space-links">{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            {/* All Rights Reserved */}

            <div className='py-10 md:flex items-center justify-between border-t border-t-bordertop'>
                <h4 className='text-darkgrey text-sm text-center md:text-start font-normal'>@2023 - PARUL INDOBALA SISHU SHIKSHA SADAN. All Rights Reserved by <Link href="" target="_blank"> PARUL INDOBALA SISHU SIKSHA SADAN</Link></h4>
                <div className="flex gap-5 mt-5 md:mt-0 justify-center md:justify-start">
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                    <div className="h-5 bg-bordertop w-0.5"></div>
                    <h4 className='text-darkgrey text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default footer;
