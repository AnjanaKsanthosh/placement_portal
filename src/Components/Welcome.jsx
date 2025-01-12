import React from 'react';
import image from '../assets/image.png';

const Welcome = () => {
  return (
    <div className="md:px-14 w-full py-6 mt-6 px-4 mx-auto max-w-screen-xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img src={image} alt="Welcome" className="w-full object-contain" />
        </div>

        {/* Text Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h4 className="text-xl font-semibold mb-2">Welcome To CGPC at</h4>
          <h1 className="text-3xl font-bold text-red-800 mb-4">
            Rajiv Gandhi Institute Of Technology
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Rajiv Gandhi Institute of Technology, established in 1991, has reached an outstanding
            position in the higher education sector in Kerala with profound achievements in
            post-graduation and research activities. It is affiliated to APJ Abdul Kalam University,
            Thiruvananthapuram, and Mahatma Gandhi University, Kottayam, Kerala. Our alumni occupy
            top positions in industry, R&D, and academia both in India and abroad. You would find
            talented candidates that suit all your requirements, and it will be our pleasure to
            support your recruitment efforts. Career Guidance and Placement Cell serves as an
            interface between graduating students and prospective employers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
