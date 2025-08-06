import { RevealOnScroll } from "../RevealOnScroll"

export const Trainings = () => {
    
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 
                            bg-clip-text text-transparent text-center"> 
                        Training Service  
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Graphics Design & Video Editing</h3>
                            <p className="text-gray-400 mb-4">
                                Take our beginner to advanced training, in-person or online, and 
                                be one of the best editor needed in the creative world. Start now!
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Adobe Photoshop", "Adobe Illustrator", "Adobe Premium", "Canva", "Capcut" ].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                    hover:bg-blue-500/20
                                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <a 
                                    href="#contact" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Training Videos 
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Programming, Web Development & Database</h3>
                            <p className="text-gray-400 mb-4">
                                Making you a coder that changes problems into opportunities
                                by bringing technology to the system. Take the beginner to 
                                advanced programming course with Erkata now!
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript", "TailwindCSS", "MySQL", "FireBase", "React", "Node.js", 
                                    "AWS", "Python"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <a 
                                    href="#contact" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Training Videos  
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 
                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Engineering Course & Softwares</h3>
                            <p className="text-gray-400 mb-4">
                                Boost your problem-solving skill and understanding of the engineering world 
                                by taking the advanced trainings and courses with Erkata. Join us!
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Etabs", "AutoCAD", "BOQ", "Revit", "ArchiCAD" ].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <a 
                                    href="#contact" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Training Videos 
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 
                            hover:border-blue-500/30 
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Research Work & Accounting</h3>
                            <p className="text-gray-400 mb-4">
                                Lets ease your research work and the accounting work with up-to-date
                                skills and softwares to make you the best. Start you journey to success 
                                with us now.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["SPSS", "Peachtree", "MsExcel", "MsWord"].map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm 
                                                hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <a 
                                    href="#contact" 
                                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                                    >
                                        View Training Videos  
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};