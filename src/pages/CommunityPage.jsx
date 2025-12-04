import React from "react";
import { motion } from "motion/react";

const CommunityPage = () => {
    return (
        <div className="relative w-full min-h-screen flex flex-col bg-secondary text-base-content">

            <title>GameHub Community</title>

            {/* Page Content */}
            <div className="relative z-20 flex flex-col min-h-screen">

                {/* HERO SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex flex-col items-center justify-center text-center px-6 py-32 gap-6 text-white"
                >
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        CONNECT WITH GAMERS <br /> EVERYWHERE
                    </h1>

                    <p className="max-w-2xl text-base md:text-lg text-gray-300">
                        Join the GameHub community to discuss your favorite games, share
                        content, show your skills, and make friends from all over the world.
                    </p>

                    <button className="btn bg-primary hover:bg-primary/80 text-white btn-wide mt-4">
                        Join Community
                    </button>
                </motion.div>

                {/* FEATURES SECTION */}
                <div className="bg-secondary py-20 px-6">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                        {["💬 Discussions", "🏆 Events", "🤝 Make Friends"].map((title, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                                className="bg-neutral/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-primary/30 text-center"
                            >
                                <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                                <p className="text-gray-300">
                                    {title === "💬 Discussions" &&
                                        "Chat about the latest games, strategies, tips, and news from the gaming world."}
                                    {title === "🏆 Events" &&
                                        "Participate in tournaments, weekly challenges, giveaways, and special community events."}
                                    {title === "🤝 Make Friends" &&
                                        "Connect with players that share your interests and build your own gaming squad."}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </div>

                {/* CALL TO ACTION */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="bg-base-100 py-16 text-center px-6"
                >
                    <h2 className="text-3xl font-bold text-accent mb-4">
                        Ready to join the GameHub Community?
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Create an account, join conversations, and start your journey with
                        thousands of gamers today.
                    </p>
                    <button className="btn bg-primary hover:bg-primary/80 text-white btn-wide">
                        Create Account
                    </button>
                </motion.div>

            </div>
        </div>
    );
};

export default CommunityPage;
