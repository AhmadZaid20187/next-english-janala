// import Image from 'next/image';
// import React from 'react';

// const Banner = () => {
//     return (
//         <div className='flex justify-between items-center my-20 mx-80'>
//             <div>
//                 <h2 className='text-5xl text-black font-semibold'><span className='text-[#00BCFF]'>English</span> is Easy!!</h2>
//                 <p className='font-bangla text-black text-xm pt-5'>আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা<br></br> আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে <br></br> যাবে অন্য একটি Level এ</p>
//             </div>
//             <div>
//                 <Image
//                     src="/assets/hero-student.png"
//                     alt='Banner Image'
//                     width={500}
//                     height={500}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Banner;



import Image from "next/image";

const Banner = () => {
    return (
        <section className="my-10 px-4 sm:my-20 sm:mx-8 lg:my-20 lg:mx-16 xl:mx-24">

            <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">

                {/* Text */}
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-8xl">
                        <span className="text-[#00BCFF]">English</span> is Easy!!
                    </h2>

                    <p className="font-bangla pt-5 text-sm text-black sm:text-base lg:text-2xl">
                        আজ থেকেই আপনার ভাষা শেখার যাত্রা শুরু করুন। আপনি যদি নতুন হন অথবা
                        <br className="hidden lg:block" />
                        আপনার দক্ষতা বাড়াতে চান, আমাদের Interactive Lessons আপনাকে নিয়ে
                        <br className="hidden lg:block" />
                        যাবে অন্য একটি Level এ
                    </p>
                </div>

                {/* Image */}
                <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
                    <Image
                        src="/assets/hero-student.png"
                        alt="Student learning English"
                        width={1000}
                        height={1000}
                        className="h-auto w-full"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;


