import React from 'react';
import { SectionProps } from '../types';

const Section: React.FC<SectionProps> = ({ title, content, reverse, icon }) => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        {/* Visual Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-bitcoin-200 dark:bg-bitcoin-900/30 rounded-full filter blur-2xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-orange-50 dark:border-gray-700 transform transition hover:-translate-y-2 duration-300">
               <div className="text-bitcoin-500 dark:text-bitcoin-400 w-24 h-24 md:w-32 md:h-32">
                 {icon}
               </div>
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-bitcoin-900 dark:text-white leading-tight transition-colors duration-300">
            {title}
          </h2>
          <div className="h-1 w-20 bg-bitcoin-500 rounded-full mx-auto md:mx-0"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
            {content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;