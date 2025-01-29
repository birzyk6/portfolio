import photo from "/face_photo.jpg";

interface AboutMeProps {
    className?: string; // Allow an optional className prop
}

const AboutMe: React.FC<AboutMeProps> = ({ className = "" }) => {
    const msg: string = `Enthusiastic data science student skilled in statistics, data analysis, and coding, with a flair for designing and building intuitive websites and applications.`;

    return (
        <div id="FaceCard" className={`flex-col p-5 link-cards ${className}`}>
            <div className="flex items-center mb-5">
                <img
                    src={photo}
                    className="rounded-full border border-gray-600 w-[3rem] h-[3rem] mr-5"
                />
                <h1 className="text-2xl font-semibold">Hi! I'm Bartosz!</h1>
            </div>
            <p className="mt-4 text-base font-light whitespace-pre-wrap text-pretty">
                {msg}
            </p>
        </div>
    );
};

export default AboutMe;
