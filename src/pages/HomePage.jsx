import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import CTAButton from '../components/CTAButton';
import TestimonialCard from '../components/TestimonialCard';

const { FiCheck, FiStar, FiUsers, FiBookOpen, FiHeadphones, FiShield } = FiIcons;

const HomePage = () => {
  const features = [
    "Understanding real power structures and decision makers",
    "Crafting messages that move government officials to action",
    "Navigating bureaucracy without losing your sanity",
    "Building lasting influence through authentic relationships",
    "Handling opposition and political pressure professionally",
    "Creating movements that drive long-term change"
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Nonprofit Director",
      content: "I got the city to approve our community center funding in just 6 weeks using James's templates."
    },
    {
      name: "Jennifer Williams",
      role: "Community Advocate",
      content: "After taking this course, the mayor's office actually calls ME for input on neighborhood issues."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-slate-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/Hero.jpg" 
            alt="Government building representing civic engagement"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 via-teal-600/80 to-slate-700/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master Government Advocacy in 90 Days
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-emerald-100">
              The Only Complete System for Getting What You Want from Government
            </p>
            <p className="text-lg mb-8 text-emerald-200">
              From Award-Winning Journalist James A. Brown
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto">
              Whether you need permits approved, funding secured, or policies changed - learn the proven methods that actually work with government officials.
            </p>
            <CTAButton 
              text="Get Instant Access - Save $500" 
              size="large" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              The Problem Every Citizen Faces
            </h2>
            <div className="text-lg text-slate-700 space-y-6">
              <p>
                You know government decisions affect your life, business, and community daily. But when you try to get involved, you hit walls: phone calls that go unreturned, meetings that lead nowhere, officials who seem impossible to reach.
              </p>
              <p>
                Most people think government is this impersonal machine that doesn't care about regular citizens.
              </p>
              <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-500">
                <p className="text-xl font-semibold text-emerald-800">
                  Here's what I learned after 15 years covering government as an award-winning journalist: Government isn't a machine. It's people. And people can be influenced, persuaded, and engaged - if you know how.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About James Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Meet James A. Brown
              </h2>
              <div className="text-lg text-slate-700 space-y-4">
                <p>
                  Award-winning journalist with 15+ years covering government and politics for major outlets including USA Today, NPR, and WXXI Public Broadcasting. Host of nationally syndicated "The Daily Note."
                </p>
                <p>
                  Winner of Associated Press and New York State Broadcasting Association Awards.
                </p>
                <p>
                  After spending over a decade in newsrooms, city halls, and government buildings, James discovered how government actually works - and how ordinary citizens can influence it.
                </p>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/James A. Brown.jpg" 
                  alt="James A. Brown - Award-winning journalist and government advocacy expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">James A. Brown</h3>
                <p className="text-slate-600">Award-Winning Journalist & Host</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Master Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              What You'll Master
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              6 Complete Modules + Bonus Training
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <SafeIcon icon={FiCheck} className="h-6 w-6 text-emerald-500 mt-1 flex-shrink-0" />
                <span className="text-lg text-slate-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiBookOpen} className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">40+ Professional Templates</h3>
              <p className="text-slate-600">
                Power mapping worksheets, meeting preparation checklists, coalition building guides, and crisis response plans.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiUsers} className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Video Walkthroughs</h3>
              <p className="text-slate-600">
                For every template so you see exactly how to use them with real examples.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <SafeIcon icon={FiHeadphones} className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Audio Course</h3>
              <p className="text-slate-600">
                For learning anywhere - commuting, exercising, or wherever you have 20 minutes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              What Makes This Different
            </h2>
            <div className="text-lg text-slate-700 space-y-6">
              <p>
                This isn't theory from a textbook. These are real-world techniques James learned covering government for 15+ years, watching some citizens get heard while others got ignored.
              </p>
              <p className="text-xl font-semibold text-emerald-600">
                The successful advocates weren't the loudest or most connected. They were the ones who understood how to work within the system.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Success Stories
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Your Investment
            </h2>
            <div className="bg-white text-slate-900 p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-2xl text-slate-500 line-through mr-4">$1,997</span>
                  <span className="text-4xl font-bold text-emerald-600">$1,497</span>
                </div>
                <p className="text-lg text-slate-600">Complete System</p>
              </div>

              <div className="space-y-4 mb-8 text-left">
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>6-module course (12+ hours of content)</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>40+ professional templates with video guides</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>Audio course for mobile learning</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>Crisis communication training</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span>Lifetime access with future updates</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiShield} className="h-5 w-5 text-emerald-500 mr-3" />
                  <span className="font-semibold">60-day money-back guarantee</span>
                </div>
              </div>

              <CTAButton 
                text="Get Instant Access Now" 
                size="large" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;