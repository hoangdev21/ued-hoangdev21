import React from 'react';
import { Home, Calculator, BookOpen } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang chủ', icon: Home, color: 'text-blue-600' },
    { path: '/grade-calc', label: 'Tính điểm', icon: Calculator, color: 'text-green-600' },
    { path: '/courses', label: 'Học phần', icon: BookOpen, color: 'text-purple-600' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 shadow-2xl z-50 safe-bottom">
      <div className="flex justify-around items-center h-16 max-w-2xl mx-auto px-4">
        {navItems.map(({ path, label, icon: Icon, color }, index) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center w-16 h-16 transition-all duration-300 rounded-2xl ${
              isActive(path)
                ? `${color} bg-gray-100 scale-110`
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            title={label}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <Icon size={24} className={`transition-transform duration-300 ${isActive(path) ? 'scale-110' : ''}`} />
            <span className={`text-xs mt-1 font-medium transition-all duration-300 ${isActive(path) ? 'font-bold' : ''}`}>
              {label}
            </span>
            {isActive(path) && (
              <div className="absolute -bottom-1 w-8 h-1 bg-current rounded-full animate-pulse"></div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
