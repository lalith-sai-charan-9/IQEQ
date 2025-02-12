import React, { useState } from 'react';
import { GraduationCap, User, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string) => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    onLogin(username);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#D1A63B]/10 to-[#FFBE00]/5 blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#FEDB73]/10 to-[#FFBE00]/5 blur-3xl transform translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-[380px] mx-auto">
          {/* Logo Section with Animation */}
          <div className="mb-12 text-center">
            <div className="relative mx-auto w-24 h-24 mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] rounded-2xl rotate-6 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-sm"></div>
              <div className="relative h-full flex items-center justify-center">
                <GraduationCap className="w-12 h-12 text-[#D1A63B] transform transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] text-transparent bg-clip-text mb-3">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to continue your learning journey
            </p>
          </div>

          {/* Login Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100">
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Username Field */}
                <div className="space-y-2">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#D1A63B] transition-colors" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1A63B]/20 focus:border-[#D1A63B] transition-all"
                      placeholder="Enter your username"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#D1A63B] transition-colors" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D1A63B]/20 focus:border-[#D1A63B] transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-5 w-5 text-[#D1A63B] border-2 border-gray-200 rounded-md focus:ring-[#D1A63B]/20 transition-colors"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm font-medium text-[#D1A63B] hover:text-[#FFBE00] transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full flex justify-center py-4 px-4 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[#D1A63B] to-[#FFBE00] hover:from-[#bf943a] hover:to-[#e6ab00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1A63B] transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#D1A63B]/10"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Signing in...' : 'Sign in'}
                    </span>
                  </button>
                </div>
              </form>

              {/* Footer Links */}
              <div className="mt-8 flex items-center justify-center space-x-4 text-sm text-gray-500">
                <button className="hover:text-[#D1A63B] transition-colors">Privacy Policy</button>
                <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                <button className="hover:text-[#D1A63B] transition-colors">Terms of Service</button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <button className="font-medium text-[#D1A63B] hover:text-[#FFBE00] transition-colors">
                Contact your administrator
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}