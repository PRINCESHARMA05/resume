import React from 'react';
import { Code, Brain, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Problem Solver",
      description: "Passionate about writing efficient code and understanding complex systems"
    },
    {
      icon: <Brain className="w-8 h-8 text-teal-600" />,
      title: "Tech Enthusiast",
      description: "Constantly exploring emerging technologies and innovative solutions"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Goal-Oriented",
      description: "Driven by the desire to transform ideas into impactful real-world solutions"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-teal-600" />,
      title: "Lifelong Learner",
      description: "Continuously upgrading skillset and embracing new challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Hi, I'm Prince Sharma — a driven and curious tech enthusiast passionate about solving 
              real-world challenges through innovation and technology. I thrive on exploring emerging 
              technologies, writing efficient code, understanding complex systems, and continuously 
              upgrading my skillset.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              I believe in transforming ideas into impactful solutions through creativity, logic, 
              and persistence. As a 3rd-year B.Tech student in Artificial Intelligence & Data Science, 
              I'm dedicated to building a strong foundation in cutting-edge technologies that shape our future.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                AI & Data Science
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-medium">
                Machine Learning
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
                Problem Solving
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;