"use client";

import {motion} from "framer-motion";

export default function Contents() {
    const containerVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {staggerChildren: 0.2, duration: 0.6},
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20, scale: 0.95},
        visible: {opacity: 1, y: 0, scale: 1},
    };

    return (
        <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-black text-white px-12 overflow-hidden">
            {/* Title */}
            <motion.h2
                className="text-5xl font-extrabold tracking-tight text-center"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
            >
                What insights am I sharing with you today?
            </motion.h2>

            {/* Content Grid */}
            <motion.div
                className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-9xl mt-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Usage Section */}
                <motion.div
                    className="p-15 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-semibold text-[#1b4332] mb-3">📱 Usage</h3>
                    <p className="text-[1.5rem] text-gray-700">
                        Does the device you use affect your payment success? Let’s break down the impact of mobile, contactless, and card transactions.
                    </p>
                </motion.div>

                {/* Reliability Section */}
                <motion.div
                    className="p-15 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-semibold text-[#1b4332] mb-3">🔒 Reliability</h3>
                    <p className="text-[1.5rem] text-gray-700">
                        Payments aren’t always seamless. Some methods work flawlessly, while others lead to declined
                        transactions and delays.
                    </p>
                </motion.div>

                {/* Patterns Section */}
                <motion.div
                    className="p-15 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
                    variants={itemVariants}
                >
                    <h3 className="text-4xl font-semibold text-[#1b4332] mb-3">📊 Patterns</h3>
                    <p className="text-[1.5rem] text-gray-700">
                        What do payment patterns reveal? By clustering data, we can uncover hidden trends in spending
                        behaviour.
                    </p>
                </motion.div>
            </motion.div>

              {/* Logos at Bottom-Right */}
              <div className="absolute bottom-6 right-8 flex items-center space-x-4">
                <img
                    src={"/logo/Payments_Association_Logo_white.svg"}
                    alt="Logo 1"
                    className="w-24 h-24 opacity-100"
                />
                <span className="text-6xl font-bold opacity-60">×</span>
                <img
                    src={"/logo/PAY360_2025_Logo_white.svg"}
                    alt="Logo 2"
                    className="w-24 h-24 opacity-100"
                />
            </div>
        </div>
    );
}
