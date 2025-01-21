import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, Phone, ArrowUp, Download, Terminal, Server, Cloud, Database, Code, Lock } from 'lucide-react';

const GlitchText = ({ text }) => {
  const [glitchText, setGlitchText] = useState(text);
  const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ';

  useEffect(() => {
    let interval;
    let originalText = text;
    let iterationCount = 0;
    let currentIndex = 0;

    const scramble = () => {
      if (currentIndex >= originalText.length) {
        clearInterval(interval);
        return;
      }

      const scrambled = originalText.split('').map((char, index) => {
        if (index < currentIndex) return char;
        if (index === currentIndex && iterationCount > 3) {
          currentIndex++;
          iterationCount = 0;
          return char;
        }
        return characters[Math.floor(Math.random() * characters.length)];
      }).join('');

      iterationCount++;
      setGlitchText(scrambled);
    };

    interval = setInterval(scramble, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{glitchText}</span>
      <span className="absolute top-0 left-0 -translate-x-[2px] text-red-500 opacity-50 z-0">{glitchText}</span>
      <span className="absolute top-0 left-0 translate-x-[2px] text-blue-500 opacity-50 z-0">{glitchText}</span>
    </span>
  );
};

const RunningLine = () => {
  const [position, setPosition] = useState(0);
  const lineContent = Array(100).fill('').map(() => 
    Math.random().toString(36).charAt(2)
  ).join('');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => (prev + 1) % lineContent.length);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden font-mono text-xs text-green-500/50">
      {lineContent.slice(position) + lineContent.slice(0, position)}
    </div>
  );
};

const HackerTerminal = ({ onComplete }) => {
  const [output, setOutput] = useState([]);
  const commands = [
    { text: "INITIALIZING SYSTEM...", delay: 500 },
    { text: "ESTABLISHING SECURE CONNECTION...", delay: 800 },
    { text: "BYPASSING SECURITY PROTOCOLS...", delay: 600 },
    { text: "ACCESSING MAIN FRAME...", delay: 700 },
    { text: "RETRIEVING USER DATA...", delay: 500 },
    { text: "$ whoami", delay: 300 },
  ];

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const executeNextCommand = () => {
      if (currentIndex < commands.length) {
        const command = commands[currentIndex];
        setOutput(prev => [...prev, command.text]);
        currentIndex++;
        timeout = setTimeout(executeNextCommand, command.delay);
      } else {
        onComplete?.();
      }
    };

    executeNextCommand();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="font-mono space-y-1">
      {output.map((line, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-green-500">{line}</span>
          {index === output.length - 1 && (
            <span className="animate-pulse">_</span>
          )}
        </div>
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [showName, setShowName] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Header remains the same */}
      
      {/* Enhanced Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <RunningLine key={i} />
          ))}
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="bg-black/90 p-8 rounded-lg shadow-2xl max-w-3xl mx-auto border border-green-500/20">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <HackerTerminal onComplete={() => setShowName(true)} />
            
            {showName && (
              <div className="mt-4">
                <h1 className="text-4xl font-bold mb-4 text-white">
                  <GlitchText text="JOHN DOE" />
                </h1>
                <div className="relative overflow-hidden bg-black/50 p-4 rounded border border-green-500/20 mb-6">
                  <div className="text-green-500 font-mono">
                    <p className="mb-2">[IDENTITY CONFIRMED]</p>
                    <p className="mb-2">PRIMARY ROLE: Senior DevOps Engineer</p>
                    <p className="mb-2">SECURITY CLEARANCE: Level 5</p>
                    <p>STATUS: Active</p>
                  </div>
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className="w-full h-full border-4 border-green-500 rounded-full animate-spin-slow"></div>
                  </div>
                </div>

                {/* Skill Metrics with Glitch Effect */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'SYSTEMS COMPROMISED', value: '1,337' },
                    { label: 'UPTIME', value: '99.99%' },
                    { label: 'THREAT LEVEL', value: 'MAXIMUM' },
                    { label: 'ENCRYPTION', value: 'QUANTUM' }
                  ].map((stat, index) => (
                    <div key={index} className="bg-black/50 p-4 rounded border border-green-500/20">
                      <div className="text-xs text-green-500 mb-1">{stat.label}</div>
                      <div className="text-xl font-bold text-white">
                        <GlitchText text={stat.value} />
                      </div>
                    </div>
                  ))}
                </div>

                <button className="bg-green-500 text-black px-8 py-3 rounded hover:bg-green-400 flex items-center gap-2 group relative overflow-hidden">
                  <span className="relative z-10 font-mono">DOWNLOAD_PROFILE.exe</span>
                  <Download size={20} className="relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 transform transition-transform group-hover:translate-x-full"></div>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
    </div>
  );
};

export default Portfolio;