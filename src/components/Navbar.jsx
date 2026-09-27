"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaQuestionCircle, FaBookOpen } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#BADEFF] shadow-sm px-4 sm:px-8 py-3">

            {/* Main Navbar */}
            <div className="flex items-center justify-between">

                {/* Logo */}
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

                {/* Desktop Buttons */}
                <div className="hidden sm:flex items-center gap-2">
                    <button className="btn btn-outline btn-primary btn-sm md:btn-md">
                        <FaQuestionCircle />
                        FAQ
                    </button>

                    <button className="btn btn-outline btn-primary btn-sm md:btn-md">
                        <FaBookOpen />
                        Learn
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="btn btn-square btn-ghost sm:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <FiX size={24} />
                    ) : (
                        <FiMenu size={24} />
                    )}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="mt-3 flex flex-col gap-2 border-t border-blue-200 pt-3 sm:hidden">

                    <button className="btn btn-primary w-full">
                        <FaQuestionCircle />
                        FAQ
                    </button>

                    <button className="btn btn-primary w-full">
                        <FaBookOpen />
                        Learn
                    </button>

                </div>
            )}
        </nav>
    );
};

export default Navbar;