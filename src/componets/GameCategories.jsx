import { motion } from "framer-motion";
import { FaGamepad, FaGhost, FaCar, FaFighterJet } from "react-icons/fa";

const categories = [
    { name: "Action", icon: <FaFighterJet /> },
    { name: "Adventure", icon: <FaGamepad /> },
    { name: "Horror", icon: <FaGhost /> },
    { name: "Racing", icon: <FaCar /> },
];

const GameCategories = () => {
    return (
        <section className="bg-base-100 py-20 text-white">
            <div className="max-w-7xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl font-bold text-primary mb-3">
                        Game Categories
                    </h2>
                    <p className="text-gray-400">
                        Choose by your favorite game genre
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="bg-secondary rounded-xl p-8 text-center border border-gray-700 hover:border-accent transition"
                        >
                            <div className="text-4xl text-accent mb-4 flex justify-center">
                                {cat.icon}
                            </div>
                            <h3 className="font-bold text-lg">{cat.name}</h3>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default GameCategories;
