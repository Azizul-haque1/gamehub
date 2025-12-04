import React from "react";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col bg-secondary text-base-content">

            <title>Contact - GameHub</title>

            <main className="flex-grow">
                <div className="max-w-6xl mx-auto py-14 px-5">

                    {/* Header section */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary">
                            Contact GameHub
                        </h1>
                        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                            Have questions, feedback, or need support? Reach out to us — we're always happy to help gamers 🎮
                        </p>
                    </div>

                    {/* Content section */}
                    <div className="grid md:grid-cols-2 gap-10">

                        {/* Left - Contact Info */}
                        <div className="bg-neutral p-8 rounded-2xl shadow-lg space-y-6 border border-white/5">

                            <h2 className="text-2xl font-bold text-accent">
                                📍 Get in Touch
                            </h2>

                            <div className="space-y-4 text-gray-400">
                                <p>
                                    <span className="font-semibold text-primary">Email:</span>{" "}
                                    support@gamehub.com
                                </p>

                                <p>
                                    <span className="font-semibold text-primary">Phone:</span>{" "}
                                    +91 98765 43210
                                </p>

                                <p>
                                    <span className="font-semibold text-primary">Address:</span>{" "}
                                    GameHub HQ, Virtual Gaming City 🌍
                                </p>
                            </div>

                            <div className="divider"></div>

                            <p className="text-sm text-gray-500">
                                Our team is available 24/7 to support you with anything related
                                to your games or account.
                            </p>
                        </div>

                        {/* Right - Contact Form */}
                        <div className="bg-neutral p-8 rounded-2xl shadow-lg border border-white/5">

                            <h2 className="text-2xl font-bold text-accent mb-6">
                                💬 Send Us a Message
                            </h2>

                            <form className="space-y-5">

                                {/* Name */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-gray-300">Your Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="input input-bordered w-full bg-secondary border-white/10"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-gray-300">Your Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="input input-bordered w-full bg-secondary border-white/10"
                                        required
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-gray-300">Subject</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="input input-bordered w-full bg-secondary border-white/10"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-gray-300">Message</span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered w-full bg-secondary border-white/10"
                                        rows="4"
                                        placeholder="Write your message..."
                                        required
                                    ></textarea>
                                </div>

                                <button className="btn btn-primary w-full text-white">
                                    Send Message 🚀
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    );
};

export default Contact;
