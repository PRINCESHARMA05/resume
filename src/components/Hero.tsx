import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/prince-sharma-resume.pdf'; // Updated file name
    link.download = 'Prince-Sharma-Resume.pdf';
    link.click();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Prince Sharma
          </h1>
          <div className="text-xl md:text-2xl text-blue-600 font-medium mb-8 space-y-2">
            <p>Tech Enthusiast | Lifelong Learner | Problem Solver</p>
            <p className="text-lg text-gray-600">B.Tech AI & Data Science Student</p>
          </div>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about solving real-world challenges through innovation and technology. 
            Transforming ideas into impactful solutions through creativity, logic, and persistence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            <button 
              onClick={handleDownloadCV}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;