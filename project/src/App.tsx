import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight, Briefcase, User, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#1e1e1e]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/80 backdrop-blur-sm border-b border-[#2d2d2d]">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="text-xl font-semibold text-[#0098fa]">JD</span>
          <div className="flex items-center gap-6">
            <a href="#about" className="text-sm text-[#909090] hover:text-[#d4d4d4] flex items-center gap-1">
              <User size={16} />
              About
            </a>
            <a href="#work" className="text-sm text-[#909090] hover:text-[#d4d4d4] flex items-center gap-1">
              <Briefcase size={16} />
              Work
            </a>
            <a href="#contact" className="text-sm text-[#909090] hover:text-[#d4d4d4] flex items-center gap-1">
              <MessageSquare size={16} />
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            John Doe
          </h1>
          <p className="text-xl text-[#909090] mb-12 max-w-2xl mx-auto">
            Full Stack Developer crafting beautiful digital experiences. 
            Specialized in React, Node.js, and modern web technologies.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#contact"
              className="px-6 py-3 bg-[#0098fa] text-white rounded-lg hover:bg-[#2fc1ff] transition-colors"
            >
              Get in touch
            </a>
            <a 
              href="#work"
              className="px-6 py-3 border border-[#404040] text-[#d4d4d4] rounded-lg hover:border-[#606060] transition-colors"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-[#d4d4d4]">Selected Work</h2>
          <div className="grid gap-8">
            {[1, 2, 3].map((project) => (
              <div 
                key={project}
                className="group relative bg-[#252526] rounded-lg p-6 hover:bg-[#2d2d2d] transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#d4d4d4]">Project {project}</h3>
                    <p className="text-[#909090] max-w-2xl">
                      A comprehensive web application built with React and Node.js, 
                      featuring real-time updates and seamless user experience.
                    </p>
                  </div>
                  <a 
                    href="#" 
                    className="p-2 rounded-lg bg-[#2d2d2d] shadow-sm group-hover:shadow-md transition-shadow"
                  >
                    <ArrowUpRight size={20} className="text-[#0098fa]" />
                  </a>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt={`Project ${project}`}
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#252526]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#d4d4d4]">About Me</h2>
              <p className="text-[#909090] mb-4">
                With 5 years of experience in full-stack development, I've had the privilege 
                of working with innovative startups and established enterprises alike.
              </p>
              <p className="text-[#909090] mb-6">
                My approach combines technical expertise with a keen eye for design, 
                ensuring that every project not only functions flawlessly but also 
                delivers an exceptional user experience.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2d2d2d] shadow-sm hover:shadow-md transition-shadow"
                >
                  <Github size={20} className="text-[#0098fa]" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#2d2d2d] shadow-sm hover:shadow-md transition-shadow"
                >
                  <Linkedin size={20} className="text-[#0098fa]" />
                </a>
                <a 
                  href="mailto:contact@example.com"
                  className="p-2 rounded-lg bg-[#2d2d2d] shadow-sm hover:shadow-md transition-shadow"
                >
                  <Mail size={20} className="text-[#0098fa]" />
                </a>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#d4d4d4]">Let's Work Together</h2>
          <p className="text-[#909090] mb-8">
            I'm currently available for freelance work and interesting projects.
            If you have a project that needs some love, let's talk.
          </p>
          <a 
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0098fa] text-white rounded-lg hover:bg-[#2fc1ff] transition-colors"
          >
            <Mail size={20} />
            <span>contact@example.com</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#2d2d2d]">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <p className="text-sm text-[#909090]">© {new Date().getFullYear()} John Doe</p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-[#909090] hover:text-[#d4d4d4]">Privacy</a>
            <a href="#" className="text-sm text-[#909090] hover:text-[#d4d4d4]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;