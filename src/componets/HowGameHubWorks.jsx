import { motion } from "framer-motion";
import { FaUserPlus, FaGamepad, FaShareAlt } from "react-icons/fa";

const HowGameHubWorks = () => {
    const steps = [
        {
            icon: <FaUserPlus />,
            title: "Create an Account",
            desc: "Sign up for free and start your gaming journey on GameHub.",
        },
        {
            icon: <FaGamepad />,
            title: "Explore & Play",
            desc: "Browse games by category and start playing instantly.",
        },
        {
            icon: <FaShareAlt />,
            title: "Share & Connect",
            desc: "Share your favorite games and connect with the community.",
        },
    ];

    return (
        <section className="bg-secondary py-20 text-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-primary">
                        How GameHub Works
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Getting started on GameHub is easy. Follow these simple steps and jump into the world of gaming.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="bg-neutral p-8 rounded-2xl shadow-xl hover:shadow-primary/50 transition-all duration-300"
                        >
                            <div className="text-accent text-5xl mb-6">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-400">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowGameHubWorks;
