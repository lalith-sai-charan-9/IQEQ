import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoadingScreen } from './components/load';
import { LoginScreen } from './components/login';
import { HomeScreenV1, HomeScreenV2, HomeScreenV3 } from './components/HomeScreenVersions';
import { ExerciseScreen } from './components/ex';

// Mock exercise data for prototyping
const mockExercise = {
  id: 'exercise-1',
  number: 1,
  title: 'Sample Exercise',
  description: 'This is a sample exercise for prototyping',
  audioUrl: '#',
  completed: false,
};

function App() {
  // Mock handlers that just log actions
  const handleLogin = (username: string) => {
    console.log('Login attempt with username:', username);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  const handleExerciseSelect = (exercise: any) => {
    console.log('Exercise selected:', exercise);
  };

  const handleExerciseComplete = () => {
    console.log('Exercise marked as complete');
  };

  const handleLoadingComplete = () => {
    console.log('Loading animation complete');
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Loading Screen Route */}
        <Route 
          path="/loading" 
          element={
            <LoadingScreen onComplete={handleLoadingComplete} />
          } 
        />

        {/* Login Screen Route */}
        <Route 
          path="/login" 
          element={
            <LoginScreen onLogin={handleLogin} />
          } 
        />

        {/* Home Screen Routes - Different Versions */}
        <Route 
          path="/home" 
          element={
            <HomeScreenV1 
              onExerciseSelect={handleExerciseSelect} 
              onLogout={handleLogout}
            />
          } 
        />

        <Route 
          path="/home2" 
          element={
            <HomeScreenV2 
              onExerciseSelect={handleExerciseSelect} 
              onLogout={handleLogout}
            />
          } 
        />

        <Route 
          path="/home3" 
          element={
            <HomeScreenV3 
              onExerciseSelect={handleExerciseSelect} 
              onLogout={handleLogout}
            />
          } 
        />

        {/* Exercise Screen Route */}
        <Route 
          path="/exercise" 
          element={
            <ExerciseScreen
              exercise={mockExercise}
              onBack={() => console.log('Back button clicked')}
              onComplete={handleExerciseComplete}
            />
          } 
        />

        {/* Default route redirects to login */}
        <Route 
          path="/" 
          element={
            <LoginScreen onLogin={handleLogin} />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;