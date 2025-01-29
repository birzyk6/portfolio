import React from "react";

interface MyWorkExperienceProps {
    className?: string;
}

const MyWorkExperience: React.FC<MyWorkExperienceProps> = ({
    className = "",
}) => {
    return (
        <div
            id="MyWorkExperience"
            className={`flex flex-col p-5 pb-8 link-cards ${className}`}
        >
            <h1 className="text-2xl font-semibold mb-5">My Work Experience</h1>
            <div className="relative ml-10">
                {/* First Job */}
                <div className="relative flex items-center">
                    <div className="absolute -left-7 top-1 w-4 h-4 ring-4 ring-purple-400 rounded-full"></div>
                    {/* Vertical Line */}
                    <div className="absolute -left-[21px] top-8 w-0.5 bg-white/20 h-[6rem] rounded-full"></div>
                    {/* At Circle */}
                    <div className="absolute -left-[1.5rem] top-[4.5rem] w-2 h-2 bg-purple-600 rounded-full"></div>

                    {/* End Circle */}
                    <div className="absolute -left-[1.5rem] top-32 w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="ml-5 space-y-2">
                            <h2 className="text-lg font-semibold">
                                Graphic Designer
                            </h2>
                            <p className="text-sm text-gray-400">CODETYPE</p>
                            <p className="text-sm text-gray-500">2019 - now</p>
                            <p className="text-sm text-gray-300 text-balance">
                                UI / UX Design, React, Next.js, Tailwind CSS.
                                Learned a lot thanks to my dear brother!
                            </p>
                        </div>
                        <img
                            src="/codetype.svg"
                            className="w-20 h-20 mr-5 opacity-35"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWorkExperience;
