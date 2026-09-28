"use client";

import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import Lessons from "./Lessons";
import LessonModal from "./LessonModal";

const AllLevels = () => {
    const [levels, setLevels] = useState([]);
    const [activeLevel, setActiveLevel] = useState(null);

    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(false);

    const [selectedLesson, setSelectedLesson] = useState(null);

    useEffect(() => {
        const loadLevels = async () => {
            const res = await fetch(
                "https://openapi.programming-hero.com/api/levels/all"
            );

            const { data } = await res.json();

            setLevels(data);
        };

        loadLevels();
    }, []);

    const handleLevelClick = async (levelId) => {
        setActiveLevel(levelId);
        setLoading(true);
        setLessons([]);

        const res = await fetch(
            `https://openapi.programming-hero.com/api/level/${levelId}`
        );

        const { data } = await res.json();

        setLessons(data);
        setLoading(false);
    };

    return (
        <>
            {/* Level Buttons */}
            <div className="flex flex-wrap justify-center gap-5">
                {levels.map((level) => (
                    <button
                        key={level.id}
                        onClick={() => {
                            handleLevelClick(level.level_no)
                            console.log(level.id)
                        }}
                        className={
                            activeLevel === level.level_no
                                ? "btn btn-primary"
                                : "btn btn-outline btn-primary"
                        }
                    >
                        <FaBookOpen />
                        Lesson-{level.level_no}
                    </button>
                ))}
            </div>

            {/* Lessons Area */}
            <div className="my-10 mx-auto w-11/12 rounded-2xl bg-gray-100 p-5 sm:p-8 lg:p-10">

                <Lessons
                    activeLevel={activeLevel}
                    lessons={lessons}
                    loading={loading}
                    onLessonClick={setSelectedLesson}
                />

                {/* Modal */}
                {selectedLesson && (
                    <LessonModal
                        lesson={selectedLesson}
                        onClose={() => setSelectedLesson(null)}
                    />
                )}

            </div>
        </>
    );
};

export default AllLevels;