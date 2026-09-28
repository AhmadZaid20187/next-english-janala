import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";

const LessonsCard = ({ lesson, onClick }) => {
    return (
        <div onClick={onClick}
            className="cursor-pointer rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md">

            <h2 className="text-center text-xl font-bold text-black">
                {lesson.word}
            </h2>

            <p className="mt-2 text-center text-xs text-gray-500">
                Meaning /Pronunciation
            </p>

            <p className="mt-3 text-center font-bangla text-lg text-black font-bold">
                {lesson.meaning} / {lesson.pronunciation}
            </p>

            <div className="mt-6 flex justify-between">
                <button className="bg-blue-200 border-none btn text-black shadow-none">
                    <IoMdAlert />
                </button>

                <button className="bg-blue-200 border-none btn text-black shadow-none">
                    <FaVolumeUp />
                </button>
            </div>

        </div>
    );
};

export default LessonsCard;