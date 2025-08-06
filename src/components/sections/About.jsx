import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const educationSkills = [
        "Mathematics", 
        "English", 
        "Physics", 
        "Chemistry", "Biology", "History",
        "General Science","Geography",
         "Mechanics",
        "Theory of Structures",
        "Reinforced Concrete","Soil Mechanics", "Geez",
    ];

    const trainingSkills = [
        "Adobe Photoshop",
        "Adobe Illustrator", 
        "Basic Programming Skills", 
        "ReachJS", "Database",
        "Video Editing", 
        "MsExcel", "MsWord",
        "SPSS", "Peachtree",
        "Etabs",
        "AutoCAD", "BOQ"
    ];

    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center"> 
                        About Us 
                    </h2>

                    <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-grey-300 mb-6">
                            Effective training service and tutor, 
                            creating human that can go on the pace 
                            of the world. Here is the education and the training we provide.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <div className="flex flex-wrap gap-2">
                                    {educationSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Training</h3>
                                <div className="flex flex-wrap gap-2">
                                    {trainingSkills.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};