import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp } = FiIcons;

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "I'm not a professional advocate. Is this too advanced for me?",
      answer: "Not at all. This course is designed for anyone who needs to work with government - business owners, nonprofit leaders, concerned citizens, or professional advocates. We start with basics and build systematically."
    },
    {
      question: "How is this different from other advocacy training?",
      answer: "This is the only course that combines comprehensive templates, video walkthroughs, crisis communication, and digital advocacy in one system. Plus, it's created by a journalist who's covered government for 15+ years."
    },
    {
      question: "Do I need any special software or tools?",
      answer: "No. Everything works with basic software you already have. Templates are provided in multiple formats (PDF, Word, Google Docs) for maximum compatibility."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many students report improved confidence in their first week and actual results within 30 days. The system is designed for both immediate wins and long-term influence building."
    },
    {
      question: "Is this only for local government?",
      answer: "The principles work at all levels - local, state, and federal. We provide specific guidance for different types of government interactions."
    },
    {
      question: "How do I access the course materials?",
      answer: "After purchase, you'll receive login credentials for our online course platform where all materials are hosted. You can access everything 24/7 from any device."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 60-day money-back guarantee (90 days for Daily Note listeners). If you're not completely satisfied, contact support for a full refund."
    },
    {
      question: "Do you offer corporate or group training?",
      answer: "Yes. Contact speaking@knowyourpowernow.com for custom corporate training options and group pricing."
    },
    {
      question: "Will this work in my state/country?",
      answer: "The core principles apply everywhere, though specific examples focus on U.S. systems. International students have successfully adapted the techniques to their local government structures."
    },
    {
      question: "How long do I have access to the materials?",
      answer: "Lifetime access. Once you purchase, you can access all materials forever, including any future updates we add to the course."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-emerald-100">
              Everything you need to know about mastering government advocacy
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 focus:outline-none focus:bg-slate-50"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </h3>
                  <SafeIcon 
                    icon={openIndex === index ? FiChevronUp : FiChevronDown} 
                    className="h-5 w-5 text-slate-500 flex-shrink-0" 
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-700 mb-8">
              Contact our support team for personalized assistance with your government advocacy needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@knowyourpowernow.com"
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:speaking@knowyourpowernow.com"
                className="bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              >
                Corporate Training
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;