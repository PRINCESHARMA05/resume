import React from 'react';
import { Code, Database, BarChart, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      skills: ["Machine Learning", "Data Visualization", "Problem Solving", "Statistical Analysis"],
      color: "blue"
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8 text-teal-600" />,
      skills: ["Python", "C", "C++", "Java", "R"],
      color: "teal"
    },
    {
      title: "Libraries & Frameworks",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Power BI"],
      color: "blue"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-8 h-8 text-teal-600" />,
      skills: ["Jupyter Notebook", "VS Code", "IntelliJ IDEA", "GitHub"],
      color: "teal"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${
                  category.color === 'blue' ? 'bg-blue-100' : 'bg-teal-100'
                }`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`px-4 py-3 rounded-lg text-center font-medium transition-all duration-300 hover:scale-105 ${
                      category.color === 'blue'
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                    }`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Always Learning</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
              frameworks, and methodologies to stay at the forefront of innovation in AI and Data Science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;