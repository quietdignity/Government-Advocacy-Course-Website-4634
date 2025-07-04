import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const TestimonialCard = ({ name, role, content }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white p-8 rounded-lg shadow-lg"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <SafeIcon key={i} icon={FiStar} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <blockquote className="text-lg text-gray-700 mb-6 italic">
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
          <span className="text-white font-bold text-lg">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;