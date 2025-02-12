import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle } from 'lucide-react';
import { Level, SubLevel, Exercise } from '../types';

interface HomeScreenProps {
  onExerciseSelect: (exercise: Exercise) => void;
  onLogout: () => void;
}

const levels: Level[] = [
  { id: 'intro', title: 'Intro', subLevels: [] },
  { id: 'foundation', title: 'Foundation', subLevels: [] },
  { id: 'basic', title: 'Basic', subLevels: [] },
  { id: 'intermediate', title: 'Intermediate', subLevels: [] },
  { id: 'advance', title: 'Advance', subLevels: [] },
  { id: 'genius', title: 'Genius', subLevels: [] },
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
    <div className="min-h-screen bg-gradient-to-br from-[#FFBE00]/10 to-[#FEDB73]/10">
      <header className="bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">IQEQ</h1>
        <button
          onClick={onLogout}
          className="px-6 py-2 bg-white text-[#D1A63B] rounded-lg hover:bg-opacity-90 transition-colors shadow-md"
        >
          Logout
        </button>
      </header>

      <main className="container mx-auto p-4 max-w-3xl">
        <div className="space-y-4">
          {levels.map((level) => (
            <div key={level.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-[#FEDB73]/20">
              <button
                className="w-full p-4 flex items-center justify-between text-left hover:bg-[#FEDB73]/10 transition-colors"
                onClick={() => setExpandedLevel(expandedLevel === level.id ? null : level.id)}
              >
                <span className="text-lg font-semibold text-[#D1A63B]">{level.title}</span>
                {expandedLevel === level.id ? (
                  <ChevronDown className="h-5 w-5 text-[#FFBE00]" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-[#FFBE00]" />
                )}
              </button>

              {expandedLevel === level.id && (
                <div className="border-t border-[#FEDB73]/20">
                  {level.subLevels.map((subLevel) => (
                    <div key={subLevel.id} className="border-b last:border-b-0 border-[#FEDB73]/20">
                      <button
                        className="w-full p-4 pl-8 flex items-center justify-between text-left hover:bg-[#FEDB73]/10 transition-colors"
                        onClick={() => setExpandedSubLevel(expandedSubLevel === subLevel.id ? null : subLevel.id)}
                      >
                        <span className="flex items-center text-gray-700">
                          {subLevel.completed && (
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          )}
                          {subLevel.title}
                        </span>
                        {expandedSubLevel === subLevel.id ? (
                          <ChevronDown className="h-5 w-5 text-[#FFBE00]" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-[#FFBE00]" />
                        )}
                      </button>

                      {expandedSubLevel === subLevel.id && (
                        <div className="bg-[#FEDB73]/5 p-4 pl-12">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {subLevel.exercises.map((exercise) => (
                              <button
                                key={exercise.id}
                                onClick={() => onExerciseSelect(exercise)}
                                className={`p-3 rounded-lg ${
                                  exercise.completed
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-white hover:bg-[#FFBE00] hover:text-white'
                                } transition-colors shadow-sm border border-[#FEDB73]/20`}
                              >
                                Exercise {exercise.number}
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