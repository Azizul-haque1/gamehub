import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-secondary py-16 px-4 text-white">
            <div className="max-w-5xl mx-auto space-y-12">

                {/* Hero Section */}
                <div className="text-center bg-neutral/80 backdrop-blur-xl p-10 rounded-2xl shadow-xl border border-primary/30">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary">
                        About GameHub
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Your ultimate destination for discovering, playing, and enjoying
                        the best games in one powerful platform.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="bg-neutral/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-primary/20">
                    <h2 className="text-2xl font-bold text-accent mb-3">
                        Our Mission
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        At <span className="text-primary font-semibold">GameHub</span>, our
                        mission is to build a fun and exciting space where gamers can
                        explore new games, track their progress, and connect with a
                        growing community of players.
                    </p>
                </div>

                {/* Features Section */}
                <div className="bg-neutral/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-primary/20">
                    <h2 className="text-2xl font-bold text-accent mb-6">
                        What We Offer
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "Huge collection of PC & Mobile games",
                            "Instant game launching",
                            "Achievements & leaderboards",
                            "Multiplayer gaming options",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 bg-secondary/50 p-3 rounded-lg"
                            >
                                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#7c3aed]" />
                                <span className="text-gray-200">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-neutral/80 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-primary/20">
                    <h2 className="text-2xl font-bold text-accent mb-3">
                        Why Choose GameHub?
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        GameHub is designed to deliver a smooth, fast, and enjoyable
                        gaming experience. From casual players to competitive gamers,
                        our platform is built for anyone who loves games and wants
                        everything in one place.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="bg-neutral/80 backdrop-blur-xl p-10 rounded-2xl shadow-lg text-center border border-primary/30">
                    <h2 className="text-2xl font-bold text-accent mb-3">
                        Contact Us
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Have feedback or questions? We’d love to hear from you.
                    </p>

                    <a
                        href="mailto:support@gamehub.com"
                        className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold tracking-wide hover:bg-accent hover:text-black transition-all duration-300"
                    >
                        support@gamehub.com
                    </a>
                </div>

            </div>
        </div>
    );
};

export default About;
