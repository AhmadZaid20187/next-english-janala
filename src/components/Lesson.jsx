import React from 'react';
import AllLevels from './AllLevels';

const Lesson = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-6xl text-center pt-3">
                <span className="text-[#00BCFF]">Let's</span>Learn Vocabularies
            </h2>
            <div className='pt-10'>
                <AllLevels />
            </div>
        </div>
    );
};

export default Lesson;