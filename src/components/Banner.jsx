
import Image from "next/image";

const Banner = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row gap-10 justify-between items-center py-5 w-11/12 mx-auto">

            {/* Text */}
            <div className="content flex-1 text-center md:text-left">
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
            <div className="image flex-1">
                <Image
                    src="/assets/hero-student.png"
                    alt="Student learning English"
                    width={700}
                    height={700}
                    className="image h-auto w-full"
                />
            </div>

        </section>
    );
};

export default Banner;


