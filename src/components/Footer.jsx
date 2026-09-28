import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";



const Footer = () => {
    return (
        <div className='flex justify-between items-center p-20 border border-t-[#FFEBEB]'>
            {/* Left Side */}
            <div>
                <Link href="/">
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-semibold text-black">
                            English
                        </p>

                        <Image
                            src="/assets/logo.png"
                            alt="English Janala logo"
                            width={50}
                            height={50}
                        />

                        <p className="font-bangla text-lg font-semibold text-black">
                            জানালা
                        </p>
                    </div>
                </Link>
                <h2 className='font-bangla text-black'>ইংরেজি শিখুন সহজে</h2>
                <p className='text-gray-400'>Providing ED-Tech Applications since 2025</p>
            </div>

            {/* Right Side */}
            <div>
                <p className='text-black'>FOLLOW US</p>
                <div className='text-black flex pt-3 gap-3'>

                    <FaFacebook size={25} />
                    <FaYoutube size={25} />
                    <PiInstagramLogoFill size={25} />
                </div>
            </div>
        </div>
    );
};

export default Footer;