import Image from 'next/image';
import React from 'react';
import news from '@/assets/news.webp';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


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
const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="navbar bg-black text-white md:px-16">
                    <div className="navbar-start justify-between md:justify-start w-[70%] md:w-[50%]">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {
                                    navItems.map(item =>
                                        <li className='text-black' key={item.path}><Link className='uppercase font-semibold' href={item.path}>
                                            {item.route}
                                        </Link></li>)
                                }

                                <li>
                                    <details>
                                        <summary className='uppercase font-semibold text-black'>Recent News</summary>
                                        <ul className="p-2 text-black">
                                            <li><a>Business</a></li>
                                            <li><a>Sports</a></li>
                                            <li><a>Crimes</a></li>
                                        </ul>
                                    </details>
                                </li>


                            </ul>
                        </div>
                        <Link href="/" className="me-2 md:me-0">
                            <Image
                                className=''
                                src={news}
                                width={150}
                                height={150}
                                alt="news"
                            />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">

                            {
                                navItems.map(item =>
                                    <li key={item.path}><Link className='uppercase font-semibold' href={item.path}>
                                        {item.route}
                                    </Link></li>)
                            }


                            <li>
                                <details>
                                    <summary className='uppercase font-semibold'>Recent News</summary>
                                    <ul className="p-2 text-black">
                                        <li><a>Business</a></li>
                                        <li><a>Sports</a></li>
                                        <li><a>Crimes</a></li>
                                    </ul>
                                </details>
                            </li>

                        </ul>
                    </div>
                    <div className=" text-white navbar-end w-[35%] md:w-[50%]">
                    <div className='md:flex justify-between items-center gap-5'>
                    <FontAwesomeIcon className='text-white h-[25px] '  icon={faFacebook} />
                    <FontAwesomeIcon className='text-white h-[25px] '  icon={faYoutube} />
                    <FontAwesomeIcon className='text-white h-[25px] '  icon={faLinkedin} />
                    <FontAwesomeIcon className='text-white h-[25px] '  icon={faTwitter} />
                    <FontAwesomeIcon className='text-white h-[25px] '  icon={faWhatsapp} />
                    </div>
                    
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;