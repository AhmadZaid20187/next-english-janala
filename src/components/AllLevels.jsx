"use client"

import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaQuestionCircle } from 'react-icons/fa';

const AllLevels = () => {

    const [levels, setLevels] = useState([]);
    const [activeLevel, setActiveLevel] = useState(null);

    useEffect(() => {
        const loadLevels = async () => {
            const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
            const { data } = await res.json();
            setLevels(data)
        }
        loadLevels();
    }, [])



    return (
        <div className='flex gap-5'>
            {
                levels.map(level => <button
                    key={level.id}
                    onClick={() => setActiveLevel(level.id)}
                    className={activeLevel === level.id ? "btn btn-primary" : "btn btn-outline btn-primary"}
                >
                    <FaBookOpen />Lesson-{level.level_no}
                </button>)
            }
        </div>
    );
};

export default AllLevels;



// "use client";

// import React, { useEffect, useState } from "react";
// import { FaBookOpen } from "react-icons/fa";

// const AllLevels = () => {

//     // Store the levels from the API
//     const [levels, setLevels] = useState([]);

//     // Fetch data when the component loads
//     useEffect(() => {

//         const loadLevels = async () => {
//             const res = await fetch(
//                 "https://openapi.programming-hero.com/api/levels/all"
//             );

//             const { data } = await res.json();

//             setLevels(data);
//         };

//         loadLevels();

//     }, []);

//     return (
//         <div className="flex gap-5">
//             {levels.map((level) => (
//                 <button
//                     className="btn btn-primary"
//                     key={level.id}
//                 >
//                     <FaBookOpen />
//                     Lesson-{level.level_no}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default AllLevels;

