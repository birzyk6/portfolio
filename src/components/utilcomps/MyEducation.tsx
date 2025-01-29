import React from "react";

interface MyEducationProps {
    className?: string; // Allow an optional className prop
}

const MyEducation: React.FC<MyEducationProps> = ({ className = "" }) => {
    return (
        <div
            id="MyEducation"
            className={`flex flex-col p-5 pb-8 link-cards ${className}`}
        >
            <h1 className="text-2xl font-semibold mb-5">My Education</h1>
            <div className="relative ml-10">
                {/* Secondary School */}
                <div className="relative flex items-center mb-10">
                    <div className="absolute -left-7 top-1 w-4 h-4 ring-4 ring-blue rounded-full"></div>
                    {/* Vertical line */}
                    <div className="absolute -left-[21px] top-8 w-0.5 bg-white/20 h-[4.5rem] rounded-full"></div>
                    {/* End circle */}
                    <div className="absolute -left-[1.5rem] top-24 w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="ml-5 space-y-2">
                            <h2 className="text-lg font-semibold">
                                Secondary School
                            </h2>
                            <p className="text-sm text-gray-400">
                                I Liceum Ogólnokształcące <br />
                                im. Tadeusza Kościuszki w Myślenicach
                            </p>
                            <p className="text-sm text-gray-500">2019 - 2022</p>
                        </div>
                    </div>
                </div>

                {/* University */}
                <div className="relative flex items-center">
                    {/* Vertical line */}
                    <div className="absolute -left-[21px] top-8 w-0.5 bg-white/20 h-[4.5rem] rounded-full"></div>
                    <div className="absolute -left-7 top-1 w-4 h-4 ring-4 ring-green-500 rounded-full"></div>
                    {/* At circle */}
                    <div className="absolute -left-[1.5rem] top-[4.5rem] w-2 h-2 bg-green-600 rounded-full"></div>

                    {/* End circle */}
                    <div className="absolute -left-[1.5rem] top-24 w-2 h-2 bg-gray-600 rounded-full"></div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="ml-5 space-y-2">
                            <h2 className="text-lg font-semibold">
                                University
                            </h2>
                            <p className="text-sm text-balance text-gray-400">
                                AGH University of Science and Technology
                            </p>
                            <p className="text-sm text-balance text-white">
                                Engineering and Data Analysis - 3rd year
                            </p>
                            <p className="text-sm text-gray-500">2022 - now</p>
                        </div>
                        <img
                            src="/agh-logo.svg"
                            className="w-24 h-24 ml-5 opacity-35"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;
