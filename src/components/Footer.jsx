import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Know Your Power</h3>
            <p className="text-gray-300 mb-4">
              Master government advocacy with proven methods from award-winning journalist James A. Brown.
            </p>
            <p className="text-gray-300">
              Get permits approved, funding secured, and policies changed with real-world techniques that actually work.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-5 w-5 mr-3 text-emerald-400" />
                <span className="text-gray-300">support@knowyourpowernow.com</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-5 w-5 mr-3 text-emerald-400" />
                <span className="text-gray-300">speaking@knowyourpowernow.com</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiMail} className="h-5 w-5 mr-3 text-emerald-400" />
                <span className="text-gray-300">media@knowyourpowernow.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 KnowYourPowerNow.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;