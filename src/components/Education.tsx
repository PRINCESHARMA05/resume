import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence & Data Science",
      institution: "Arya College of Engineering",
      location: "Jaipur, Rajasthan",
      status: "Current, 3rd Year",
      description: "Focusing on machine learning, data analysis, and AI technologies",
      current: true
    },
    {
      degree: "Senior Secondary (Class 12th)",
      institution: "Aravali Public School",
      location: "Neem Ka Thana, Sikar (Rajasthan)",
      status: "80%",
      description: "Strong foundation in mathematics and sciences",
      current: false
    },
    {
      degree: "Secondary (Class 10th)",
      institution: "HDI Public School",
      location: "Ladiya, Cheeplata, Sikar (Rajasthan)",
      status: "79%",
      description: "Excellent academic performance with focus on STEM subjects",
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in technology and innovation
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ${
                edu.current ? 'border-l-4 border-blue-600' : ''
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className={`p-3 rounded-lg ${
                    edu.current ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <GraduationCap className={`w-6 h-6 ${
                      edu.current ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {edu.current && (
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium self-start">
                    Current
                  </span>
                )}
              </div>
              <p className="text-gray-700 pl-16">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;