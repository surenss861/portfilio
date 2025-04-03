import React, { useState, useEffect } from 'react';
import { Brain, Search, BookOpen, Sparkles, ArrowRight, Star, Users, Zap, CheckCircle, Moon, Sun } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900 dark:text-white">Flash AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Features</a>
              <a href="#pricing" className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Pricing</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <div className="flex items-center space-x-3">
                <button className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2">Sign in</button>
                <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  Try for free
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/50 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Powered by AI</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-6">
            Transform your study notes into
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> interactive flashcards</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Flash AI uses artificial intelligence to convert your study materials into effective flashcards and summaries, helping you learn faster and retain more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-medium inline-flex items-center justify-center space-x-2">
              <span>Start learning for free</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Star className="h-4 w-4 text-yellow-400" />
              <span>4.9/5 from 1,000+ students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Demo Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 flex items-center space-x-4">
                <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Paste your study notes here..."
                  className="flex-1 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  Generate Cards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-50 dark:bg-gray-800/50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Everything you need to study effectively</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform helps you create, organize, and review your study materials efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6 text-blue-600" />,
                title: "Smart Summaries",
                description: "AI analyzes your notes and creates concise, memorable summaries focusing on key concepts."
              },
              {
                icon: <Zap className="h-6 w-6 text-blue-600" />,
                title: "Instant Flashcards",
                description: "Convert any text into interactive flashcards with just one click. Save hours of manual work."
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "Collaborative Study",
                description: "Share your flashcard decks with classmates and study together in real-time."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm">
                <div className="bg-blue-50 dark:bg-blue-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Simple, student-friendly pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Start for free, upgrade when you're ready</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="px-6 py-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Student Pro</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Everything you need to ace your studies</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">$9.99</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">per month</div>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited AI-generated flashcards',
                    'Smart note summarization',
                    'Progress tracking dashboard',
                    'Collaborative study groups',
                    'Priority support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition text-sm font-medium">
                  Start 14-day free trial
                </button>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Ready to transform your study routine?</h2>
              <p className="text-gray-600 dark:text-gray-300">Join thousands of students already using Flash AI.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                Try Flash AI for free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">Flash AI</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-300">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <span>© 2025 Flash AI</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;