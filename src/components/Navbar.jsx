import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='bg-[#BADEFF] shadow-sm p-1'>
            {/* Logo */}
            <div className='flex items-center gap-1'>
                <p className='text-lg font-semibold'>English</p>
                <Image
                    src="/assets/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                />
                <p className='font-bangla text-lg font-semibold'>জানালা</p>
            </div>

            {/* Other Buttons */}
            <div></div>
        </div>
    );
};

export default Navbar;