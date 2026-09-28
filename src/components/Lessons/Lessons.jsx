import React from "react";
import LessonsCard from "./LessonsCard";
import Image from "next/image";

const Lessons = ({ activeLevel,
    lessons,
    loading,
    onLessonClick }) => {

    // Nothing selected
    if (activeLevel === null) {
        return (
            <div className="flex min-h-40 items-center justify-center">
                <div className="text-center">
                    <p className="text-xs text-gray-400 font-bangla">
                        উপরের একটি Lesson Select করুন
                    </p>

                    <h2 className="text-2xl font-semibold text-black font-bangla">
                        একটি Lesson Select করুন
                    </h2>
                </div>
            </div>
        );
    }

    // Loading
    if (loading) {
        return (
            <div className="flex min-h-40 items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    // No lessons found
    if (lessons.length === 0) {
        return (
            <div className="flex min-h-40 items-center justify-center">
                <div className=" flex flex-col justify-center items-center p-5">
                    <Image
                        src="/assets/alert-error.png"
                        alt="Module Not Found"
                        width={100}
                        height={100}
                    />
                    <p className="text-xs text-gray-400 font-bangla">
                        দুঃখিত! এই Lesson এ কোনো Vocabulary পাওয়া যায়নি।
                    </p>

                    <h2 className="text-2xl font-semibold text-black font-bangla">
                        কোনো Lesson পাওয়া যায়নি
                    </h2>
                </div>
            </div>
        );
    }

    // Lessons found
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson) => (
                <LessonsCard
                    key={lesson.id}
                    lesson={lesson}
                    onClick={() => onLessonClick(lesson)}
                />
            ))}
        </div>
    );
};

export default Lessons;