import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiMic, FiBookOpen, FiUsers } = FiIcons;

const AboutPage = () => {
  const achievements = [
    {
      icon: FiAward,
      title: "Award-Winning Journalist",
      description: "Associated Press and New York State Broadcasting Association Awards"
    },
    {
      icon: FiMic,
      title: "The Daily Note Host",
      description: "Nationally syndicated radio show finding clarity in everyday moments"
    },
    {
      icon: FiBookOpen,
      title: "15+ Years Experience",
      description: "Covering government and politics for major outlets"
    },
    {
      icon: FiUsers,
      title: "Real-World Insights",
      description: "Learned from watching citizens succeed and fail in government advocacy"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
                alt="James A. Brown - Award-winning journalist and government advocacy expert"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              James A. Brown
            </h1>
            <p className="text-xl text-slate-300">
              Award-Winning Journalist & Government Advocacy Expert
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-lg text-slate-700 space-y-6">
              <p>
                James A. Brown grew up thinking government was something that happened <em>to</em> people like him. But 15+ years of award-winning journalism taught him different.
              </p>
              <p>
                Government is people. People who can be reached and influenced - if you know how.
              </p>
              <p>
                After watching some citizens get heard while others got ignored, James saw the patterns. The successful advocates understood how to work within the system.
              </p>
              <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-500">
                <p className="text-xl font-semibold text-emerald-800 mb-0">
                  <strong>Know Your Power</strong> shares everything James learned - real-world techniques that actually work, not theory that sounds good but fails in practice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Experience & Recognition
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-lg"
              >
                <SafeIcon icon={achievement.icon} className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-slate-700">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Featured In
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">USA Today</h3>
                <p className="text-slate-600 mt-2">National Coverage</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">NPR</h3>
                <p className="text-slate-600 mt-2">Public Radio</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900">WXXI</h3>
                <p className="text-slate-600 mt-2">Public Broadcasting</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;