function Bio() {
    const biotext = "Passionate frontend developer with 3+ years of experience creating beautiful, responsive web applications. I love turning complex problems into simple, elegant solutions.";
    const skills = ["React", "JavaScript", "CSS", "Node.js", "Git"];

    return (
        <div className="px-9 py-4">
            {/* About Me Section */}
            <div className="flex items-center justify-center mb-3">
                <div className="h-px bg-gray-300 flex-grow"></div>
                <span className="px-3 text-gray-600 font-bold uppercase tracking-wider text-xs whitespace-nowrap">About Me</span>
                <div className="h-px bg-gray-300 flex-grow"></div>
            </div>
            <p className="text-gray-600 text-center leading-relaxed text-sm px-2">
                {biotext}
            </p>

            {/* Skills Section */}
            <div className="mt-6">
                <div className="flex items-center justify-center mb-4">
                    <div className="h-px bg-gray-300 flex-grow"></div>
                    <span className="px-3 text-gray-600 font-bold uppercase tracking-wider text-xs whitespace-nowrap">Skills</span>
                    <div className="h-px bg-gray-300 flex-grow"></div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-medium shadow-sm hover:bg-indigo-700 transition-colors cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Bio;
