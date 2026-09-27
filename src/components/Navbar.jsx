import Image from 'next/image';
import Link from 'next/link';
import { FaQuestionCircle, FaBookOpen } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
    return (
        <div className='bg-[#BADEFF] shadow-sm px-8 py-3 flex justify-between'>
            {/* Logo */}

            <Link href="/">
                <div className='flex items-center gap-1'>
                    <p className='text-lg font-semibold text-black'>English</p>
                    <Image
                        src="/assets/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <p className='font-bangla text-lg font-semibold text-black'>জানালা</p>
                </div>
            </Link>

            {/* <div className='flex items-center gap-1'>
                <p className='text-lg font-semibold text-black'>English</p>
                <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <p className='font-bangla text-lg font-semibold text-black'>জানালা</p>
            </div> */}

            {/* Other Buttons */}
            <div className='space-x-3'>
                <button className='btn btn-primary'><FaQuestionCircle />FAQ</button>
                <button className='btn btn-primary'><FaBookOpen />Learn</button>
                <button className='btn btn-primary'><FiLogOut />Logout</button>
            </div>
        </div>
    );
};

export default Navbar;