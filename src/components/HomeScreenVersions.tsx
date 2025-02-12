import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';
import { Level, SubLevel, Exercise } from '../types';

// Common Props and Data
interface HomeScreenProps {
  onExerciseSelect: (exercise: Exercise) => void;
  onLogout: () => void;
}

const levels: Level[] = [
  { id: 'intro', title: 'Intro', description: 'Start your journey with basic concepts', icon: '🎯' },
  { id: 'foundation', title: 'Foundation', description: 'Build your core understanding', icon: '🏗️' },
  { id: 'basic', title: 'Basic', description: 'Master the fundamentals', icon: '📚' },
  { id: 'intermediate', title: 'Intermediate', description: 'Take your skills further', icon: '🚀' },
  { id: 'advance', title: 'Advanced', description: 'Challenge yourself', icon: '💪' },
  { id: 'genius', title: 'Genius', description: 'Become an expert', icon: '🧠' },
].map(level => ({
  ...level,
  subLevels: Array.from({ length: 3 }, (_, i) => ({
    id: `${level.id}-${i + 1}`,
    title: `Level ${i + 1}`,
    completed: false,
    exercises: Array.from({ length: 10 }, (_, j) => ({
      id: `${level.id}-${i + 1}-${j + 1}`,
      number: j + 1,
      audioUrl: '#',
      completed: false,
    })),
  })),
}));

// Common Header Component
const Header = ({ onLogout }: { onLogout: () => void }) => (
  <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] text-transparent bg-clip-text">
            IQEQ
          </h1>
        </div>
        <button
          onClick={onLogout}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] hover:from-[#bf943a] hover:to-[#e6ab00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1A63B] transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

// Homepage Version 1 - Normal State
export function HomeScreenV1({ onExerciseSelect, onLogout }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Continue your learning journey from where you left off.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => (
            <div 
              key={level.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{level.icon}</span>
                  <div className="bg-[#FEDB73]/10 rounded-full p-2">
                    <ChevronRight className="h-5 w-5 text-[#D1A63B]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Homepage Version 2 - Foundation and Intermediate Expanded
export function HomeScreenV2({ onExerciseSelect, onLogout }: HomeScreenProps) {
  const expandedLevels = ['foundation', 'intermediate'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Continue your learning journey from where you left off.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => (
            <div 
              key={level.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{level.icon}</span>
                  <div className="bg-[#FEDB73]/10 rounded-full p-2">
                    {expandedLevels.includes(level.id) ? (
                      <ChevronDown className="h-5 w-5 text-[#D1A63B]" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-[#D1A63B]" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>

              {expandedLevels.includes(level.id) && (
                <div className="border-t border-gray-100 bg-gray-50/50">
                  {level.subLevels.map((subLevel) => (
                    <div key={subLevel.id} className="border-b border-gray-100 last:border-b-0">
                      <div className="w-full px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-full bg-[#FEDB73]/20 flex items-center justify-center">
                            <span className="text-[#D1A63B] text-sm font-medium">
                              {level.subLevels.indexOf(subLevel) + 1}
                            </span>
                          </div>
                          <span className="text-gray-700 font-medium">{subLevel.title}</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Homepage Version 3 - Foundation Level 1 and Intermediate Level 3 Expanded
export function HomeScreenV3({ onExerciseSelect, onLogout }: HomeScreenProps) {
  const expandedLevels = ['foundation', 'intermediate'];
  const expandedSubLevels = ['foundation-1', 'intermediate-3'];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Continue your learning journey from where you left off.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => (
            <div 
              key={level.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{level.icon}</span>
                  <div className="bg-[#FEDB73]/10 rounded-full p-2">
                    {expandedLevels.includes(level.id) ? (
                      <ChevronDown className="h-5 w-5 text-[#D1A63B]" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-[#D1A63B]" />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-gray-600 text-sm">{level.description}</p>
              </div>

              {expandedLevels.includes(level.id) && (
                <div className="border-t border-gray-100 bg-gray-50/50">
                  {level.subLevels.map((subLevel) => (
                    <div key={subLevel.id} className="border-b border-gray-100 last:border-b-0">
                      <div className="w-full px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 rounded-full bg-[#FEDB73]/20 flex items-center justify-center">
                            <span className="text-[#D1A63B] text-sm font-medium">
                              {level.subLevels.indexOf(subLevel) + 1}
                            </span>
                          </div>
                          <span className="text-gray-700 font-medium">{subLevel.title}</span>
                        </div>
                        {expandedSubLevels.includes(subLevel.id) ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>

                      {expandedSubLevels.includes(subLevel.id) && (
                        <div className="px-6 pb-6">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                            {subLevel.exercises.map((exercise) => (
                              <button
                                key={exercise.id}
                                onClick={() => onExerciseSelect(exercise)}
                                className={`
                                  relative group rounded-lg p-4 flex flex-col items-center justify-center
                                  ${exercise.completed
                                    ? 'bg-green-50 hover:bg-green-100'
                                    : 'bg-white hover:bg-[#FEDB73]/5'}
                                  border border-gray-100 hover:border-[#FEDB73]
                                  transition-all duration-200 shadow-sm hover:shadow
                                `}
                              >
                                <span className={`
                                  text-lg font-semibold mb-1
                                  ${exercise.completed ? 'text-green-600' : 'text-gray-900'}
                                `}>
                                  {exercise.number}
                                </span>
                                <span className={`
                                  text-xs
                                  ${exercise.completed ? 'text-green-600' : 'text-gray-500'}
                                `}>
                                  Exercise
                                </span>
                                {exercise.completed && (
                                  <div className="absolute -top-1 -right-1">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                  </div>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
