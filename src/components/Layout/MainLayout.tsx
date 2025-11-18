import React from 'react';
import type { ReactNode } from 'react';
import BottomNavigation from '../Navigation/BottomNavigation';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 animate-fade-in-up">
      {/* Header with Gradient */}
      <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-4 shadow-xl sticky top-0 z-40 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white text-blue-600 rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg animate-pulse-glow">
              UED
            </div>
            <h1 className="text-3xl font-bold tracking-wide">MIS</h1>
          </div>
          {title && (
            <p className="text-lg opacity-90 font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {title}
            </p>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24 px-4 safe-bottom">
        <div className="max-w-2xl mx-auto py-6">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
