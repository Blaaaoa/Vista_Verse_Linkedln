import React, { useEffect, useRef } from 'react';
import { Linkedin, Mail, Globe, Sparkles, Users, Rocket } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alfred P Benjamin",
    role: "Amal Jyothi College ",
    image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F52c18f05-0251-463f-8128-8add0c4ee71c_600x600.png",
     linkedIn: "https://www.linkedin.com/in/alfred-p-benjamin-675066246/"
  },
  {
    name: "Akshay Sebastian",
    role: "Amal Jyothi College ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8QoQCoKdKdLeQH4OKnDI7k_rfiC0O1Fnsg&s",
     linkedIn: "https://www.linkedin.com/in/akshay-sebastian-432473320/"
  },
  {
    name: "Augusto Varghese",
    role: "Amal Jyothi College ",
    image: "https://thumbs.dreamstime.com/b/cool-crocodile-playing-electric-guitar-cartoon-illustration-cool-crocodile-playing-electric-guitar-cartoon-illustration-suitable-345339015.jpg",
    linkedIn: "http://www.linkedin.com/in/augustov2"
  },
  {
    name: "Aaron Tom Viji",
    role: "Amal Jyothi College",
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/11F84/production/_131640637_5be652a7-d27b-495c-b5dc-9f58009bc4d9.jpg",
     linkedIn: "https://www.linkedin.com/in/aarontom29/"
  },
  {
    name: "Amarnath C",
    role: "Amal Jyothi College ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8LNvfLgBFBV66189Bjjmb3gtz05c8Gey21Q&s",
     linkedIn: "https://www.linkedin.com/in/amarnathcdj/"
  }
];

const Particles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      const tx = (Math.random() - 0.5) * 200;
      const ty = (Math.random() - 0.5) * 200;
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      particle.style.animation = `particle-animation ${Math.random() * 2 + 2}s linear`;
      
      container.appendChild(particle);
      
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    };

    const interval = setInterval(() => {
      createParticle();
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};


const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200/20 dark:border-gray-800">
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-20"></div>
        <img 
          src={member.image} 
          alt={member.name}
          className="relative w-32 h-32 rounded-full object-cover border-4 border-white/10 dark:border-gray-800 shadow-md"
        />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
      <a
        href={member.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <Linkedin size={18} />
        View Profile
      </a>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen gradient-bg relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pattern"></div>
      <Particles />
      <ThemeToggle />
      <div className="relative">
        <header className="pt-20 pb-12 px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm mb-6 border border-gray-200/20 dark:border-gray-800">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium">Vista Verse</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We're a passionate group of professionals dedicated to delivering exceptional results. 
            Connect with us on LinkedIn to learn more about our journey and expertise.
          </p>
        </header>

      

        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </main>

        <footer className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm mt-20 py-12 px-4 relative border-t border-gray-200/20 dark:border-gray-800">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="flex gap-6 mb-6">
              <a href="mailto:contact@company.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://company.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Globe size={24} />
              </a>
              <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">© 2024 Company Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;