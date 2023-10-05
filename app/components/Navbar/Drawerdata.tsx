import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '#home-section', current: false },
    { name: 'Staff', href: '#staff-section', current: false },
    { name: 'Notice board', href: '#notice-section', current: false },
    { name: 'Gallery', href: '#gallery-section', current: false },
    { name: 'Admission', href: '#admission-section', current: false },
    { name: 'Contact Us', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=parulindobala@gmail.com', current: false },
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
