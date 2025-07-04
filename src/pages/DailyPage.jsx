import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAButton from '../components/CTAButton';

const { FiCheck, FiClock, FiGift, FiShield, FiHeadphones } = FiIcons;

const DailyPage = () => {
  const benefits = [
    "Save $500 - Your price: $1,497 (Regular: $1,997)",
    "Bonus Audio Module: \"How Journalists Think About Government\"",
    "Special Q&A Access: Monthly calls for Daily Note listeners only",
    "Extended Guarantee: 90 days instead of 60"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiHeadphones} className="h-16 w-16 text-amber-300 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Welcome Daily Note Listeners!
              </h1>
            </div>
            <p className="text-xl mb-8 text-purple-100">
              You just heard James A. Brown find clarity in everyday moments.
            </p>
            <div className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm">
              <p className="text-2xl font-semibold mb-4">
                Now discover how to find clarity in government systems too.
              </p>
              <p className="text-lg">
                After 15 years covering government, James learned that successful advocacy isn't about being loud or connected - it's about understanding how the system really works.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl text-slate-700 mb-8">
              <strong>Know Your Power</strong> teaches you exactly what James learned, with the same authentic, no-hype approach you hear every day on The Daily Note.
            </p>
          </motion.div>

          {/* Exclusive Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-lg mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Exclusive Daily Note Listener Benefits
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheck} className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What You Get */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-emerald-50 p-8 rounded-lg mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              What You Get
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Complete 6-module system with 40+ professional templates, video guides for every template, audio course, crisis communication training, and lifetime access.
            </p>
            <div className="bg-emerald-600 text-white p-6 rounded-lg text-center">
              <p className="text-xl font-semibold mb-2">
                No hype. No hot takes. Just truth about how government actually works.
              </p>
              <p className="text-lg italic">
                Real talk for real people who need real results.
              </p>
            </div>
          </motion.div>

          {/* Limited Time Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-amber-50 border-l-4 border-amber-400 p-8 rounded-lg text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <SafeIcon icon={FiClock} className="h-8 w-8 text-amber-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Limited Time Offer
              </h2>
            </div>
            <p className="text-xl text-slate-700 mb-6">
              This exclusive Daily Note listener discount expires in 7 days.
            </p>
            <div className="flex items-center justify-center mb-8">
              <SafeIcon icon={FiShield} className="h-6 w-6 text-emerald-500 mr-3" />
              <p className="text-lg font-semibold text-slate-700">
                90-day money-back guarantee. Try the complete system risk-free.
              </p>
            </div>
            <CTAButton 
              text="Claim Your Daily Note Discount Now" 
              size="large" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DailyPage;