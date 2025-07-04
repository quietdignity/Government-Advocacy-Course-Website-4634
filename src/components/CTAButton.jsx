import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ text, onClick, size = 'medium', className = '', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const defaultClasses = "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${sizeClasses[size]} ${className || defaultClasses}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </motion.button>
  );
};

export default CTAButton;