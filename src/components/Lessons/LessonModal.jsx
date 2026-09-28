import { FaMicrophoneAlt } from "react-icons/fa";

const LessonModal = ({ lesson, onClose }) => {
    return (
        <dialog open className="modal">
            <div className="modal-box bg-white">

                <h3 className="text-2xl font-bold text-black flex flex-row items-center">
                    {lesson.word}(<FaMicrophoneAlt />{lesson.pronunciation})
                </h3>

                <p className="mt-4 font-semibold text-black">
                    Meaning
                </p>

                <p className="font-bangla text-gray-700">
                    {lesson.meaning}
                </p>

                <p className="mt-4 font-semibold text-black">
                    Example
                </p>

                <p className="text-gray-700">
                    {lesson.example}
                </p>

                <p className="mt-4 font-semibold text-black">
                    When to say
                </p>

                <p className="font-bangla text-gray-700">
                    {lesson.whenToSay}
                </p>

                <div className="modal-action">
                    <button
                        onClick={onClose}
                        className="btn btn-primary"
                    >
                        Complete Learning
                    </button>
                </div>

            </div>

            <div
                className="modal-backdrop"
                onClick={onClose}
            />
        </dialog>
    );
};

export default LessonModal;