import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';



const Footer = () => {
    const navItems = [
        {
            route: 'Home',
            path: "/"
        },
        {
            route: 'Pages',
            path: "/pages"
        },
        {
            route: 'About',
            path: "/about"
        },
        {
            route: 'Categories',
            path: "/categories"
        },
        {
            route: 'Contact',
            path: "/contact"
        },
    ]

    return (
        <div className='sm:p-5 md:p-10 bg-black text-center '>
            <div className='flex justify-center '>
                <div className='flex mt-5 sm:mt-3'>
                    <Link href="https://www.facebook.com/salim.sadman.131336"><FontAwesomeIcon className='text-white h-[25px] ms-4' icon={faFacebook} /></Link>
                    <Link href="https://www.linkedin.com/in/i-s-m-salim-sadman-895475196/"><FontAwesomeIcon className='text-white h-[25px] ms-4' icon={faLinkedin} /></Link>
                    <Link href="https://www.youtube.com/"><FontAwesomeIcon className='text-white h-[25px] ms-4' icon={faYoutube} /></Link>
                    <FontAwesomeIcon className='text-white h-[25px] ms-4' icon={faTwitter} />
                    <Link href="https://wa.me/+8801988577631?text=Salim%20Sadman"> <FontAwesomeIcon className='text-white h-[25px] ms-4' icon={faWhatsapp} /></Link>
                </div>

            </div>

            <div className="flex justify-center mt-5">
            <div className="navbar-center px-5 lg:flex flex-wrap">
                <ul className="block md:flex menu menu-horizontal px-1">

                    {
                        navItems.map(item =>
                            <li key={item.path}><Link className='uppercase font-semibold text-white' href={item.path}>
                                {item.route}
                            </Link></li>)
                    }


                    <li>
                        <details>
                            <summary className='uppercase font-semibold text-white'>Recent News</summary>
                            <ul className="p-2 text-white">
                                <li><a>Business</a></li>
                                <li><a>Sports</a></li>
                                <li><a>Crimes</a></li>
                            </ul>
                        </details>
                    </li>

                </ul>
            </div>
            </div>
            <p className='text-neutral-600 text-lg'>©2025 Dragon News Portal Website. Developed by Salim Sadman</p>


        </div>
    );
};

export default Footer;