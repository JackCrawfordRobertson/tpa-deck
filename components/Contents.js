"use client";

import { motion } from "framer-motion";

export default function Contents() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-white text-black px-12 overflow-hidden">
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        So, what will I be sharing with you today?
      </motion.h2>

      {/* Content Grid */}
      <motion.div
        className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mt-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Usage Section */}
        <motion.div
          className="p-8 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-[#1b4332] mb-3">📱 Usage</h3>
          <p className="text-lg text-gray-700">
            How does the device you pay with impact success rates? We will explore 
            why mobile dominates, where wearables struggle, and what it all means for 
            the future of payments.
          </p>
        </motion.div>

        {/* Reliability Section */}
        <motion.div
          className="p-8 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-[#1b4332] mb-3">🔒 Reliability</h3>
          <p className="text-lg text-gray-700">
            Not all payments are created equal. Some methods succeed effortlessly, 
            while others create friction. We will reveal what makes transactions 
            succeed or fail—and why trust is everything.
          </p>
        </motion.div>

        {/* Patterns Section */}
        <motion.div
          className="p-8 bg-gray-100 rounded-xl shadow-md text-center border border-gray-300"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold text-[#1b4332] mb-3">📊 Patterns</h3>
          <p className="text-lg text-gray-700">
            What can data clustering reveal about how we pay? We will use K-medoids 
            to uncover hidden trends, identify risks, and spot new opportunities in 
            consumer behaviour.
          </p>
        </motion.div>
      </motion.div>

      {/* Logos at Bottom-Right */}
      <div className="absolute bottom-6 right-8 flex items-center space-x-4">
        <img src="/logo/Payments Association Logo.svg" alt="Logo 1" className="w-24 h-24 opacity-100" />
        <span className="text-6xl font-bold opacity-60">×</span>
        <img src="/logo/PAY360 2025 Logo.svg" alt="Logo 2" className="w-24 h-24 opacity-100" />
      </div>
    </div>
  );
}