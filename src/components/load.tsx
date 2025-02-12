import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LoadingScreenProps {
  onComplete?: () => void;  // Made optional for prototype
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="text-center relative w-full max-w-[min(100%,320px)] sm:max-w-sm mx-auto">
        {/* Logo and Pulse Effect */}
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] blur-2xl opacity-20 rounded-full scale-150"></div>
          <div className="relative">
            <div className="bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto shadow-xl">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 tracking-wider">
          IQEQ
        </h1>

        {/* Progress Bar Container */}
        <div className="w-full max-w-[240px] sm:max-w-[280px] mx-auto">
          {/* Progress Bar */}
          <div className="w-full bg-gray-100 rounded-full h-1.5 mb-3 sm:mb-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#D1A63B] to-[#FFBE00]"
              style={{ width: '50%' }}
            ></div>
          </div>

          {/* Loading Text */}
          <p className="text-gray-500 text-sm sm:text-base font-medium">
            Loading...
          </p>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#D1A63B]/5 to-transparent rounded-full transform rotate-45"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#FFBE00]/5 to-transparent rounded-full transform rotate-45"></div>
      </div>
    </div>
  );
}
