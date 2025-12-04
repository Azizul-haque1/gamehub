import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-secondary text-white">
            <div className="w-10/12 mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

                {/* GameHub Info */}
                <div>
                    <h6 className="text-primary text-lg font-bold mb-4">GameHub</h6>
                    <p className="text-gray-400 text-sm">
                        Your ultimate destination for discovering, playing, and enjoying the best games online.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h6 className="text-primary text-lg font-bold mb-4">Quick Links</h6>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="hover:text-accent transition">Home</Link>
                        </li>
                        <li>
                            <Link to="/auth/login" className="hover:text-accent transition">Login</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-accent transition">Contact</Link>
                        </li>
                        <li>
                            <Link to="/community" className="hover:text-accent transition">Community</Link>
                        </li>
                        <li>
                            <Link to="/support" className="hover:text-accent transition">Support</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h6 className="text-primary text-lg font-bold mb-4">Follow Us</h6>
                    <div className="flex gap-5 text-gray-400">
                        <a href="#" className="hover:text-primary transition">Twitter</a>
                        <a href="#" className="hover:text-primary transition">Facebook</a>
                        <a href="#" className="hover:text-primary transition">YouTube</a>
                        <a href="#" className="hover:text-primary transition">Instagram</a>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 py-5 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} GameHub — All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
