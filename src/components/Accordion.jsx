import React from 'react';

const Accordion = () => {
    return (
        <div className='p-10 my-30'>

            <h2 className="text-3xl font-semibold text-black sm:text-4xl lg:text-6xl text-center pt-3">
                <span className="text-[#00BCFF]">Frequently </span>Asked Questions
            </h2>
            <div className='space-y-3 mt-20'>
                <div className="collapse collapse-plus border-none bg-gray-100">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title font-semibold text-black">1.How can I start learning English on this website?</div>
                    <div className="collapse-content text-sm text-black">You can start by exploring our beginner lessons, interactive exercises, and quizzes. We also offer structured courses to guide you step by step.</div>
                </div>
                <div className="collapse collapse-plus border-none bg-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-black">2.What can I learn from each lesson?</div>
                    <div className="collapse-content text-sm text-black">Each lesson focuses on different English vocabulary. You can learn the word, meaning, pronunciation, example sentence, and when to use the word.</div>
                </div>
                <div className="collapse collapse-plus border-none bg-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-black">3.How can I see the details of a vocabulary word?</div>
                    <div className="collapse-content text-sm text-black">Select a lesson and click on any vocabulary card. A popup will show detailed information about the word, including its meaning, example, and how it can be used.</div>
                </div>
                <div className="collapse collapse-plus border-none bg-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-black">4.Can I learn English even if I am a beginner?</div>
                    <div className="collapse-content text-sm text-black">Yes! English Janala is designed to help learners improve their English vocabulary step by step. You can start with the lessons that match your current level and gradually build your vocabulary.</div>
                </div>
                <div className="collapse collapse-plus border-none bg-gray-100">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title font-semibold text-black">5.Do I need to complete the lessons in order?</div>
                    <div className="collapse-content text-sm text-black">No. You can select any available lesson and start learning from there. However, following the lessons in order can help you build your vocabulary gradually.</div>
                </div>
            </div>



        </div>
    );
};

export default Accordion;