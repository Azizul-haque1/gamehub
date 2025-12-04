import { motion } from "motion/react";

const Support = () => {
    return (
        <div className="min-h-screen bg-base-100 text-white px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
                    GameHub Support
                </h1>
                <p className="text-center text-gray-400 mb-12">
                    Need help? We are always here for our players
                </p>

                {/* Support Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Help Center */}
                    <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-white/10 ">
                        <h2 className="text-xl font-semibold text-accent mb-2">
                            Help Center
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Find answers to the most common GameHub questions.
                        </p>
                        <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-accent transition">
                            Explore
                        </button>
                    </div>

                    {/* Contact */}
                    <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-white/10">
                        <h2 className="text-xl font-semibold text-accent mb-2">
                            Contact Support
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Can't find your answer? Reach out to our team.
                        </p>
                        <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-accent transition">
                            Contact Now
                        </button>
                    </div>

                    {/* Community */}
                    <div className="bg-secondary p-6 rounded-2xl shadow-lg border border-white/10">
                        <h2 className="text-xl font-semibold text-accent mb-2">
                            Community Help
                        </h2>
                        <p className="text-gray-400 mb-4">
                            Get tips from other GameHub players.
                        </p>
                        <button className="px-4 py-2 rounded-md bg-primary text-white hover:bg-accent transition">
                            Visit Community
                        </button>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16 bg-secondary p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        <div>
                            <h3 className="text-accent font-semibold">
                                How do I create an account?
                            </h3>
                            <p className="text-gray-400">
                                Click on the "Sign Up" button in the top menu and follow the steps.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-accent font-semibold">
                                Are all games free?
                            </h3>
                            <p className="text-gray-400">
                                Many games are free with optional premium upgrades.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-accent font-semibold">
                                How can I reset my password?
                            </h3>
                            <p className="text-gray-400">
                                Use the "Forgot Password" option on the login page.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Support;
