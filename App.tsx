import React, { useState, useEffect } from 'react';
import ChatWidget from './components/ChatWidget';
import Section from './components/Section';
import { BitcoinIcon, NetworkIcon, LockIcon, TrendingUpIcon, SunIcon, MoonIcon } from './components/Icons';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-x-hidden text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 text-bitcoin-500 dark:text-bitcoin-400 shadow-lg border border-orange-100 dark:border-gray-700 hover:scale-110 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
        </button>

        {/* Hero Section with Chatbot */}
        <header className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-24 md:py-0 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-bitcoin-200 dark:bg-bitcoin-900/20 rounded-full blur-[100px] opacity-40 dark:opacity-20 pointer-events-none transition-colors duration-500"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-orange-200 dark:bg-orange-900/20 rounded-full blur-[80px] opacity-40 dark:opacity-20 pointer-events-none transition-colors duration-500"></div>
          
          <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
            
            {/* Hero Text */}
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-block px-4 py-1 bg-bitcoin-100 dark:bg-bitcoin-900/30 text-bitcoin-800 dark:text-bitcoin-300 rounded-full text-sm font-semibold tracking-wide uppercase mb-2 shadow-sm border border-bitcoin-200 dark:border-bitcoin-800 transition-colors duration-300">
                There is no second best
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-bitcoin-900 dark:text-white tracking-tight leading-[1.1] transition-colors duration-300">
                Fix the Money, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-bitcoin-500 to-bitcoin-600">
                  Fix the World.
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed transition-colors duration-300">
                Discover the inevitable future of money. Scarcity without rulers. Wealth that cannot be confiscated. Welcome to the monetary revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                <a 
                  href="https://bitcoin.org/bitcoin.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-bitcoin-900 dark:bg-bitcoin-600 text-white rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-bitcoin-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Learn Why
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Read the Whitepaper
                </span>
              </div>
            </div>

            {/* Hero Chatbot */}
            <div className="flex justify-center md:justify-end w-full">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-1 bg-gradient-to-r from-bitcoin-400 to-orange-300 dark:from-bitcoin-700 dark:to-orange-800 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                <ChatWidget />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-bitcoin-400 dark:text-bitcoin-600 z-20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </header>

        {/* Content Sections */}
        <main id="austrian">
          
          <Section
            icon={<TrendingUpIcon className="w-full h-full" />}
            title="Austrian Economics: The Time Preference"
            content="Fiat money is designed to lose value, forcing you to spend today rather than save for tomorrow. This high time preference consumes capital and destroys civilization. Bitcoin restores the ability to save. By holding a money that cannot be debased, you lower your time preference, planning for generations instead of just the next quarter. It is the foundation of a moral economy."
            reverse={false}
          />

          <Section
            icon={<BitcoinIcon className="w-full h-full" />}
            title="Absolute Scarcity: 21 Million"
            content="For the first time in human history, we have a good that is strictly scarce. There will never be more than 21,000,000 Bitcoin. No politician can print more to fund wars or bail out failing banks. It is mathematical truth protected by the laws of physics. When demand rises, supply cannot expand—number goes up, forever."
            reverse={true}
          />

          <Section
            icon={<NetworkIcon className="w-full h-full" />}
            title="Unstoppable & Uncontrollable"
            content="Bitcoin has no CEO. No office. No single point of failure. It is a decentralized network of thousands of nodes run by ordinary people. It cannot be shut down by any government or army. It is money that exists outside the permission of the state. If you hold your private keys, your wealth is truly yours, unseizable and censorship-resistant."
            reverse={false}
          />

          <Section
            icon={<LockIcon className="w-full h-full" />}
            title="Hard Money Always Wins"
            content="Thiers' Law dictates that 'Good money drives out bad' when the good money is not legally suppressed. In a global digital age, capital flows to where it is treated best. Fiat currencies are melting ice cubes. Bitcoin is solid granite. Over a long enough time horizon, the superior monetary technology always demonetizes the inferior one. The outcome is binary."
            reverse={true}
          />

        </main>

        {/* Footer - Cleaner Look */}
        <footer className="bg-orange-50 dark:bg-gray-950 border-t border-orange-100 dark:border-gray-800 py-16 mt-12 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-bitcoin-900 dark:text-white mb-6">Ready to opt out?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
              The orange pill is a one-way street. Once you see the corruption of the fiat standard, you cannot unsee it. Study Bitcoin. Take custody. Be your own bank.
            </p>
            <div className="flex justify-center space-x-6 mb-12">
               <div className="h-px w-12 bg-bitcoin-300 dark:bg-gray-700 self-center"></div>
               <BitcoinIcon className="w-8 h-8 text-bitcoin-500 animate-float" />
               <div className="h-px w-12 bg-bitcoin-300 dark:bg-gray-700 self-center"></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              © {new Date().getFullYear()} The Orange Pill. Not financial advice. 1 BTC = 1 BTC.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;