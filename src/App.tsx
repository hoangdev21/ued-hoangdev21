import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import GradeCalc from './pages/GradeCalc/GradeCalc';
import Courses from './pages/Courses/Courses';
import Method from './pages/GradeCalc/subpages/Method';
import Calculator from './pages/GradeCalc/subpages/Calculator';
import Results from './pages/GradeCalc/subpages/Results';
import './index.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grade-calc" element={<GradeCalc />} />
        <Route path="/grade-calc/method" element={<Method />} />
        <Route path="/grade-calc/calculator" element={<Calculator />} />
        <Route path="/grade-calc/results" element={<Results />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
