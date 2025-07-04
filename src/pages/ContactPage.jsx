import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiMic, FiUsers, FiHeadphones } = FiIcons;

const ContactPage = () => {
  const contactOptions = [
    {
      icon: FiMail,
      title: "Course Support",
      email: "support@knowyourpowernow.com",
      description: "Technical support, course access, and general questions about the advocacy training."
    },
    {
      icon: FiMic,
      title: "Speaking & Corporate Training",
      email: "speaking@knowyourpowernow.com",
      description: "Custom corporate training, group workshops, and speaking engagements."
    },
    {
      icon: FiHeadphones,
      title: "Media Inquiries",
      email: "media@knowyourpowernow.com",
      description: "Press inquiries, interviews, and media-related questions."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-300">
              We're here to help you master government advocacy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={option.icon} className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {option.description}
                </p>
                <a
                  href={`mailto:${option.email}`}
                  className="text-emerald-600 hover:text-emerald-800 font-medium"
                >
                  {option.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Response Times
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Course Support
                </h3>
                <p className="text-slate-600">
                  We typically respond within 24 hours during business days
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Speaking Inquiries
                </h3>
                <p className="text-slate-600">
                  Custom training proposals within 48 hours
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About James */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
              <img 
                src="/James A. Brown.jpg" 
                alt="James A. Brown - Award-winning journalist and government advocacy expert"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              About James A. Brown
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Award-winning journalist with 15+ years covering government and politics. Host of "The Daily Note" and creator of the Know Your Power advocacy system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                Associated Press Award Winner
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                NY Broadcasting Association Award
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;