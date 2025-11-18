import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'default' | 'glass' | 'elevated' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  variant = 'default',
  padding = 'md',
  hover = true,
  style
}) => {
  const variantClasses = {
    default: 'bg-white border border-gray-100',
    glass: 'glass-effect',
    elevated: 'bg-white shadow-xl border-0',
    gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
  };

  const paddingClasses = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };

  const hoverClass = hover && onClick ? 'card-hover cursor-pointer' : '';

  return (
    <div
      className={`rounded-2xl shadow-md transition-all duration-300 ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
