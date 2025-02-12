import React, { useState } from 'react';
import { Play, Pause, SkipForward, RotateCcw, ChevronLeft, ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';
import { Exercise, Level, SubLevel } from '../types';

// Exercise Screen Component
interface ExerciseScreenProps {
  exercise: Exercise;
  onBack: () => void;
  onComplete: () => void;
}

export function ExerciseScreen({ exercise, onBack, onComplete }: ExerciseScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const speeds = [0.5, 1, 1.5, 2];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header with gradient background */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-[#D1A63B] hover:text-[#FFBE00] transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 mr-1 transform transition-transform group-hover:-translate-x-1" />
              Back to Exercises
            </button>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-500">Exercise Progress</span>
              <div className="ml-3 bg-[#FEDB73]/10 rounded-full px-3 py-1">
                <span className="text-sm font-semibold text-[#D1A63B]">{exercise.number}/10</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Exercise Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Exercise Header */}
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Exercise {exercise.number}
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Listen carefully and follow the instructions
            </p>
          </div>

          {/* Audio Controls */}
          <div className="px-8 py-10">
            {/* Main Controls */}
            <div className="flex justify-center items-center space-x-8 mb-10">
              <button
                onClick={() => {/* Implement repeat */}}
                className="p-4 rounded-full hover:bg-gray-50 transition-colors group"
              >
                <RotateCcw className="h-6 w-6 text-gray-400 group-hover:text-[#D1A63B] transition-colors" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-6 rounded-full bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] text-white shadow-lg shadow-[#D1A63B]/10 hover:from-[#bf943a] hover:to-[#e6ab00] transform transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8 ml-1" />
                )}
              </button>

              <button
                onClick={() => {/* Implement skip */}}
                className="p-4 rounded-full hover:bg-gray-50 transition-colors group"
              >
                <SkipForward className="h-6 w-6 text-gray-400 group-hover:text-[#D1A63B] transition-colors" />
              </button>
            </div>

            {/* Playback Speed Controls */}
            <div className="flex justify-center items-center space-x-2">
              {speeds.map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${playbackSpeed === speed
                      ? 'bg-[#FEDB73]/20 text-[#D1A63B] ring-2 ring-[#D1A63B]/10'
                      : 'text-gray-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Progress and Complete Button */}
          <div className="px-8 py-6 bg-gray-50/50 border-t border-gray-100">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full bg-gray-100 rounded-full h-2 max-w-md">
                <div 
                  className="bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] h-2 rounded-full"
                  style={{ width: `${(exercise.number / 10) * 100}%` }}
                ></div>
              </div>
              <button
                onClick={onComplete}
                className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] hover:from-[#bf943a] hover:to-[#e6ab00] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1A63B] shadow-lg shadow-[#D1A63B]/10"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Mark as Completed
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Home Screen Component
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

export function HomeScreen({ onExerciseSelect, onLogout }: HomeScreenProps) {
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);
  const [expandedSubLevel, setExpandedSubLevel] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with modern gradient and shadow */}
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Continue your learning journey from where you left off.</p>
        </div>

        {/* Levels Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {levels.map((level) => (
            <div 
              key={level.id} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-100"
            >
              {/* Level Header */}
              <button
                className="w-full text-left focus:outline-none"
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{level.icon}</span>
                    <div className="bg-[#FEDB73]/10 rounded-full p-2">
                      {expandedLevel === level.id ? (
                        <ChevronDown className="h-5 w-5 text-[#D1A63B]" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-[#D1A63B]" />
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </div>
              </button>

              {/* Sublevels */}
              {expandedLevel === level.id && (
                <div className="border-t border-gray-100 bg-gray-50/50">
                  {level.subLevels.map((subLevel) => (
                    <div key={subLevel.id} className="border-b border-gray-100 last:border-b-0">
                      <button
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        onClick={() => setExpandedSubLevel(expandedSubLevel === subLevel.id ? null : subLevel.id)}
                      >
                        <div className="flex items-center space-x-3">
                          {subLevel.completed ? (
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-[#FEDB73]/20 flex items-center justify-center">
                              <span className="text-[#D1A63B] text-sm font-medium">{level.subLevels.indexOf(subLevel) + 1}</span>
                            </div>
                          )}
                          <span className="text-gray-700 font-medium">{subLevel.title}</span>
                        </div>
                        {expandedSubLevel === subLevel.id ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </button>

                      {/* Exercises Grid */}
                      {expandedSubLevel === subLevel.id && (
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