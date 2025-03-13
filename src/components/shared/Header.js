import Image from 'next/image';
import React from 'react';
import Navbar from "./Navbar";
import logo from '@/assets/logo.webp';
import { getCurrentDate } from '@/utilities/getCurrentDate';

const Header = () => {

    const currentDate = getCurrentDate()

    return ( 
        <div className='w-full my-6'>
            <div className='text-center'>
                <div className=''>
                <Image
                className='mx-auto  w-4/6 md:w-2/6 h-4/6 md:h-2/6'
                src={logo}
                width={1000}
                height={1000}
                alt='logor chobi'
                
                />
                </div>
                <p className=' my-4'>Journalist Without Fear or Favour</p>
                <p className=' my-2'>{currentDate}</p>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;