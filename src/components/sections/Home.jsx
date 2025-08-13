import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {

    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 
                        bg-clip-text text-transparent leading-right">
                            We are Erkata
                        </h1>

                        <p className="text-grey-400 text-lg mb-5 max-w-lg mx-auto">
                            We are an institute that trains your children 
                            and yourself for the success coming towards you.
                            Being with us is being in a track taking you to 
                            the best and desirable place. 
                        </p>

                        <div className="flex justify-center space-x-4">
                            <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium 
                                transition relative overflow-hidden hover:-translate-y-0.5 
                                hover:shadow-[0_0_1px_rgba(59, 139, 246, 0.4)]"
                            >
                                View Trainings
                            </a>

                            <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded 
                                font-medium transition-all duration-200 
                                hover:-translate-y-0.5 hover:shadow-[0_0_1px_rgba(59, 139, 246, 0.2)] hover:bg-blue-500/10"
                            >
                                Get In Touch
                            </a>

                        </div>
                </div>
           </RevealOnScroll>
        </section>
    );
};