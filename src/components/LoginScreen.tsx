import React, { useState } from 'react';
import { User, Lock, GraduationCap } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white w-full max-w-[min(100%,400px)] rounded-2xl shadow-lg px-6 py-8 sm:px-8 sm:py-10">
        <div className="text-center mb-8 sm:mb-10">
          <div className="bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-md transform hover:scale-105 transition-transform duration-300">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
          <p className="text-sm sm:text-base text-gray-500">Sign in to continue your learning journey</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-[#D1A63B]" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3.5 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D1A63B]/20 focus:border-[#D1A63B] placeholder-gray-400 text-gray-700 text-sm sm:text-base transition-all duration-300"
                required
              />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-[#D1A63B]" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3.5 sm:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#D1A63B]/20 focus:border-[#D1A63B] placeholder-gray-400 text-gray-700 text-sm sm:text-base transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mt-4">
            <label className="flex items-center space-x-2 cursor-pointer group order-2 sm:order-1">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-gray-300 rounded text-[#D1A63B] focus:ring-[#D1A63B]/20 cursor-pointer"
              />
              <span className="text-gray-600 text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">Remember me</span>
            </label>
            <button 
              type="button" 
              className="text-[#D1A63B] hover:text-[#FFBE00] text-sm sm:text-base font-medium transition-colors duration-300 order-1 sm:order-2"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D1A63B] text-white py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base hover:bg-[#FFBE00] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 mt-6 sm:mt-8"
          >
            Sign In
          </button>

          <p className="text-center text-gray-500 text-sm sm:text-base mt-6 sm:mt-8">
            Don't have an account?{' '}
            <button 
              type="button" 
              className="text-[#D1A63B] hover:text-[#FFBE00] font-medium transition-colors duration-300"
            >
              Sign up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}